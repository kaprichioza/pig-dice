
import { generateRandomNumber } from './../../utils/math';
import { toast } from 'react-toastify';
import { getInitialAppState } from './app-initial-state';


export class GameDice {
    constructor() { }
    init = (state, setState) => {
        this.appState = state;
        this.setState = setState;
    }
    calcDiceThrow = () => {
        const { total } = this.appState.current;
        const first = generateRandomNumber(1, 6);
        const second = generateRandomNumber(1, 6);
        const nextTotal = total + first + second;
        this.appState.current.leftDice = `http://storage.kameleoon.eu/tfw/dice-${first}-md.png`;
        this.appState.current.rightDice = `http://storage.kameleoon.eu/tfw/dice-${second}-md.png`;
        this.appState.current.total = nextTotal;
        this.saveState();
        if (first === 1 || second === 1) {
            this.changePlayer();
        }
    }
    pushScore = () => {
        const activePlayer = this.appState.player1.isActive ? 'player1' : 'player2';
        const newScore = this.appState[activePlayer].score + this.appState.current.total;
        this.appState[activePlayer].score = newScore;
        this.changePlayer();
        this.checkScore();
    }
    changePlayer = () => {
        this.appState.player1.isActive = !this.appState.player1.isActive;
        this.appState.player2.isActive = !this.appState.player2.isActive;
        this.saveState();
        this.clearTotal();
    }
    clearTotal = () => {
        this.appState.current.total = 0;
        this.saveState();
    }
    saveState = () => {
        this.setState({
            ...this.appState
        });
    }
    checkScore = () => {
        if (this.appState.player1.score >= 100) {
            toast.success('U won');
            window.sessionStorage.setItem('wins', ++this.appState.gameHistory.wins);
            this.restartGame();
        }
        if (this.appState.player2.score >= 100) {
            toast.error('U lose');
            window.sessionStorage.setItem('loses', ++this.appState.gameHistory.loses);
            this.restartGame();
        }
    }
    restartGame = () => {
        this.setState(getInitialAppState());
    }
}
