import './Styles/main.css'
import Routes from './Routes/Routes';
import BottomBar from './Components/BottomBar';
import React from 'react';
import Routers from './Routes/Routes';
import Nav from './Components/Nav';

function App() {
  return (
      <div className="App">
      <header>
        <Nav></Nav>
      </header>
        <main>
          <Routers/>
        </main>
        <footer>
          <BottomBar/>
        </footer>
      </div>
  );
}

export default App;
