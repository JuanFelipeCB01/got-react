import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../shared/MyContext'

export default function BottomBar({setHomePage}) {
  const {t, changeLanguage} = useContext(MyContext)
  return (
    <div className='footer-bottom'>
        <nav className='footer-bottom-bar'>
            <NavLink  to ="/characters" onClick={()=>setHomePage(true)} >{t("characters")}</NavLink>
            <NavLink to ="/houses" onClick={()=>setHomePage(true)}>{t("houses")}</NavLink>
            <NavLink to ="/chronology" onClick={()=>setHomePage(true)}>{t("chronology")}</NavLink>
        </nav>
    </div>
  )
}
