import React from 'react';
import './App.css';
import { Player } from './components/player/player';

function App() {  
  const [appState, setAppState] = React.useState({
    player1: {      
      id: 1,
      name: '',
      score: 0,
    },
    player2: {
      id: 2,
      score: 0,
      name: 'AI',
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Dice Pig</div>
      </header>
      <main className="wrapper">
        <div className="first-player">
          <Player id={appState.player1.id}
            score={appState.player1.score}
            name={appState.player1.name}
            onNameSaved={(name)=>setAppState({...appState, player1: {
              ...appState.player1,
              name: name,
            }})} />
        </div>
        <div className="field"></div>
        <div className="second-player">
          <Player id={appState.player2.id}
            score={appState.player2.score}
            name={appState.player2.name} />
        </div>
      </main>
      <footer className="footer">
        <div className="rules"></div>
      </footer>
    </div>
  );
}

export default App;
