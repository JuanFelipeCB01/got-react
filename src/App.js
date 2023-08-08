import './Styles/main.css'
import BottomBar from './Components/BottomBar';
import React, { useState, useTransition } from 'react';
import Routers from './Routes/Routes';
import Nav from './Components/Nav';
import { MyContext } from './shared/MyContext';
import {useTranslation } from 'react-i18next';


function App() {
const [homePage, setHomePage] = useState(false)
const [characterPage, setCharacterPage] = useState(false)
const {t, i18n} = useTranslation(["translation"])
  const [search, setSearch] = useState("");

const changeLanguage = (code) => {
  i18n.changeLanguage(code);
}
  return (
    <MyContext.Provider value={{t, changeLanguage, search, setSearch}}>
    <div className="app">
      <header>
        <Nav setHomePage={setHomePage} homePage={homePage}  characterPage={characterPage}/>
      </header>
      <main >
            <Routers />
      </main>
      <footer className="footer">
        <BottomBar setHomePage={setHomePage} setCharacterPage={setCharacterPage}/>
      </footer>
    </div>
    </MyContext.Provider>
  );
}

export default App;
