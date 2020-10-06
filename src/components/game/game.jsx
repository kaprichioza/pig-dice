import React, { useEffect } from 'react';
import './game.css';
import { Player } from '../player/player';
import { Field } from '../field/field';
import { GameData } from '../gameData/gameData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getInitialAppState } from './app-initial-state';
import { GameDice } from './game-dice';

export const Game = () => { 
    const [state, setState] = React.useState(getInitialAppState());
    const game = React.useMemo(() => new GameDice(), []);   
    game.init(state, setState);
    const { pushScore, calcDiceThrow, appState } = game;
    const disabledHold = (appState.player2.isActive || appState.current.total === 0);
    const { current: { total, leftDice, rightDice }, player1, player2, gameHistory: { wins, loses} } = appState;   

    useEffect(() => {
        if (appState.player1.isActive) return;
        setTimeout(() => {
            if (appState.current.total >= 21) {
                pushScore()
            }
            else {
                calcDiceThrow();
            }
        }, 1000);
    }, [player1.isActive, total]);

    return (
        <main className="wrapper">
            <div className="player-container">
                <div className="first-player">
                    <Player score={player1.score}
                        name={player1.name} />
                </div>
                <Field total={total}
                    leftDice={leftDice}
                    rightDice={rightDice}
                    onDiceThrown={calcDiceThrow}
                    canNotThrow={player2.isActive}
                />
                <div className="second-player">
                    <Player score={player2.score}
                        name={player2.name} />
                </div>
            </div>
            <GameData wins={wins}
                loses={loses}
                onHoldScore={pushScore}
                holdDisabled={disabledHold}
            />
            <ToastContainer position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable />
        </main>
    );
}
