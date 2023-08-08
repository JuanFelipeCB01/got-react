import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../shared/MyContext'

export default function BottomBar({setHomePage,setCharacterPage}) {
  const { t, bottomBarShow } = useContext(MyContext);
  return (
    <div className='footer-bottom'>
        {bottomBarShow &&
        <nav className='footer-bottom-bar'>
            <NavLink  className="footer-bottom-bar-link" to ="/characters" onClick={()=>(setHomePage(true), setCharacterPage(true))} >{t("characters")}</NavLink>
            <NavLink  className="footer-bottom-bar-link"to ="/houses" onClick={()=>(setHomePage(true), setCharacterPage(false))}>{t("houses")}</NavLink>
            <NavLink  className="footer-bottom-bar-link"to ="/chronology" onClick={()=>(setHomePage(true), setCharacterPage(false))}>{t("chronology")}</NavLink>
        </nav>
        }
    </div>
  )
}
