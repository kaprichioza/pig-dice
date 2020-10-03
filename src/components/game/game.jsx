import React from 'react';
import './game.css';
import { Player } from '../player/player';
import { Typography } from '@material-ui/core';
import { Field } from '../field/field';
import { generateRandomNumber } from '../../utils/math';
import { GameData } from '../gameData/gameData';

export const Game = () => {
    const [appState, setAppState] = React.useState({
        player1: {
            id: 1,
            name: 'Player',
            score: 0,
        },
        player2: {
            id: 2,
            score: 0,
            name: 'AI',
        },
        current: {
            total: 0,
            leftDice: 'http://storage.kameleoon.eu/tfw/dice-6-md.png',
            rightDice: 'http://storage.kameleoon.eu/tfw/dice-6-md.png',
        },
        gameHistory: {
            wins: 0,
            loses: 0,
        }
    });
    const { current: { total, leftDice, rightDice } } = appState
    const calcDiceThrow = () => {
        const first = generateRandomNumber(1, 6);
        const second = generateRandomNumber(1, 6);
        const nextTotal = total + first + second;
        setAppState({
            ...appState, current: {
                total: nextTotal,
                leftDice: `http://storage.kameleoon.eu/tfw/dice-${first}-md.png`,
                rightDice: `http://storage.kameleoon.eu/tfw/dice-${second}-md.png`,
            },
        });
    }
    return (
        <main className="wrapper">
            <div className="player-container">
                <div className="first-player">
                    <Player id={appState.player1.id}
                        score={appState.player1.score}
                        name={appState.player1.name} />
                </div>
                <Field total={total}
                    leftDice={leftDice}
                    rightDice={rightDice}
                    onDiceThrown={calcDiceThrow}
                />
                <div className="second-player">
                    <Player id={appState.player2.id}
                        score={appState.player2.score}
                        name={appState.player2.name} />
                </div>
            </div>
            <GameData wins={appState.gameHistory.wins}
                loses={appState.gameHistory.loses}
            />
        </main>
    );
}
