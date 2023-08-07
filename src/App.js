import './Styles/main.css'
import BottomBar from './Components/BottomBar';
import React, { useState } from 'react';
import Routers from './Routes/Routes';
import Nav from './Components/Nav';

function App() {
const [homePage, setHomePage] = useState(false)

  return (
    <div className="app">
      <header>
        <Nav setHomePage={setHomePage} homePage={homePage} />
      </header>
      <main >
        <Routers />
      </main>
      <footer className="footer">
        <BottomBar setHomePage={setHomePage} />
      </footer>
    </div>
  );
}

export default App;
