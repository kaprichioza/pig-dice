import React from 'react';
import './App.css';
import { Game } from './components/game/game';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
