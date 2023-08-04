import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomBar() {
  return (
    <div>
        <nav className='footer-bottom-bar'>
            <NavLink to ="/characters">characters</NavLink>
            <NavLink to ="/houses">houses</NavLink>
            <NavLink to ="/chronology">chronology</NavLink>
        </nav>
    </div>
  )
}
