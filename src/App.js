import { Router } from 'react-router-dom';
import './Styles/main.css'
import Routes from './Routes/Routes';
import BottomBar from './Components/BottomBar';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes/>
        </main>
        <footer>
          <BottomBar/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
