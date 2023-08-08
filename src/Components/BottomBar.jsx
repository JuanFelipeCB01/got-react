import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../shared/MyContext'

export default function BottomBar({setHomePage,setCharacterPage}) {
  const {t} = useContext(MyContext)
  return (
    <div className='footer-bottom'>
        <nav className='footer-bottom-bar'>
            <NavLink activeClassName="active"  to ="/characters" onClick={()=>(setHomePage(true), setCharacterPage(true))} >{t("characters")}</NavLink>
            <NavLink activeClassName="active" to ="/houses" onClick={()=>(setHomePage(true), setCharacterPage(false))}>{t("houses")}</NavLink>
            <NavLink activeClassName="active" to ="/chronology" onClick={()=>(setHomePage(true), setCharacterPage(false))}>{t("chronology")}</NavLink>

        </nav>
    </div>
  )
}
