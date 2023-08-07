import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomBar({setHomePage}) {
  return (
    <div className='footer-bottom'>
        <nav className='footer-bottom-bar'>
            <NavLink  to ="/characters" onClick={()=>setHomePage(true)} >CHARACTERS</NavLink>
            <NavLink to ="/houses" onClick={()=>setHomePage(true)}>HOUSES</NavLink>
            <NavLink to ="/chronology" onClick={()=>setHomePage(true)}>CHRONOLOGY</NavLink>
        </nav>
    </div>
  )
}
