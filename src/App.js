import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import { Game } from './components/game/game';

function App() {   
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" component="h3" gutterBottom className="title">
          Dice Pig
      </Typography>
      </header>      
      <Game />
      <footer className="footer">
        <div className="rules"></div>
      </footer>
    </div>
  );
}

export default App;
