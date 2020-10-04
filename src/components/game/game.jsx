import React, { useState, useEffect } from 'react';
import './game.css';
import { Player } from '../player/player';
import { Field } from '../field/field';
import { generateRandomNumber } from '../../utils/math';
import { GameData } from '../gameData/gameData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from '@material-ui/core';

const initialAppState = {
    player1: {
        name: 'Player',
        score: 0,
        isActive: true,
    },
    player2: {
        score: 0,
        name: 'AI',
        isActive: false,
    },
    current: {
        total: 0,
        leftDice: 'http://storage.kameleoon.eu/tfw/dice-6-md.png',
        rightDice: 'http://storage.kameleoon.eu/tfw/dice-6-md.png',
    },
    gameHistory: {
        wins: 0,
        loses: 0,
    },
};
export const Game = () => {
    const [appState, setAppState] = React.useState(JSON.parse(JSON.stringify(initialAppState)));
    const disabledHold = (appState.player2.isActive || appState.current.total === 0);
    const { current: { total, leftDice, rightDice } } = appState
    const calcDiceThrow = () => {
        const first = generateRandomNumber(1, 6);
        const second = generateRandomNumber(1, 6);
        const nextTotal = total + first + second;
        appState.current.leftDice = `http://storage.kameleoon.eu/tfw/dice-${first}-md.png`;
        appState.current.rightDice = `http://storage.kameleoon.eu/tfw/dice-${second}-md.png`;
        appState.current.total = nextTotal;
        saveState();
        if (first === 1 || second === 1) {
            changePlayer();
        }
    }
    useEffect(() => {
        if (appState.player1.isActive) return;
        setTimeout(() => {
            if (appState.current.total >= 21) {
                pushScore()
            }
            else {
                calcDiceThrow();
            }
        }, 500);
    }, [appState.player1.isActive, appState.current.total]);
    const pushScore = () => {
        const activePlayer = appState.player1.isActive ? 'player1' : 'player2';
        const newScore = appState[activePlayer].score + appState.current.total;
        appState[activePlayer].score = newScore;
        changePlayer();
        checkScore();
    }
    function changePlayer() {
        appState.player1.isActive = !appState.player1.isActive;
        appState.player2.isActive = !appState.player2.isActive;
        saveState();
        clearTotal();
    }
    function clearTotal() {
        appState.current.total = 0;
        saveState();
    }
    function saveState() {
        setAppState({
            ...appState
        });
    }
    function checkScore() {
        debugger;
        if (appState.player1.score >= 100) {
            toast.success('U won');
            handleModalClose();
        }
        if (appState.player2.score >= 100) {
            toast.error('U lose');
            handleModalClose();
        }
    }
    const handleModalClose = () => {
        setAppState(initialAppState);
    }
    return (
        <main className="wrapper">
            <div className="player-container">
                <div className="first-player">
                    <Player score={appState.player1.score}
                        name={appState.player1.name} />
                </div>
                <Field total={total}
                    leftDice={leftDice}
                    rightDice={rightDice}
                    onDiceThrown={calcDiceThrow}
                    canNotThrow={appState.player2.isActive}
                />
                <div className="second-player">
                    <Player score={appState.player2.score}
                        name={appState.player2.name} />
                </div>
            </div>
            <GameData wins={appState.gameHistory.wins}
                loses={appState.gameHistory.loses}
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
