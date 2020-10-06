const wins = () => { return window.sessionStorage.getItem('wins') || 0 }
const loses = () => { return window.sessionStorage.getItem('loses') || 0 };
export const getInitialAppState = () => ({
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
        wins: wins(),
        loses: loses(),
    },
});
