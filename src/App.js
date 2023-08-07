import './Styles/main.css'
import BottomBar from './Components/BottomBar';
import React, { useState, useTransition } from 'react';
import Routers from './Routes/Routes';
import Nav from './Components/Nav';
import { MyContext } from './shared/MyContext';
import {useTranslation } from 'react-i18next';


function App() {
const [homePage, setHomePage] = useState(false)
const {t, i18n} = useTranslation(["translation"])
const changeLanguage = (code) => {
  i18n.changeLanguage(code);
}
  return (
    <MyContext.Provider value={{t, changeLanguage}}>
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
    </MyContext.Provider>
  );
}

export default App;
