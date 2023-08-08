import React, { useContext } from 'react'
import { NavLink} from 'react-router-dom'
import { MyContext } from '../shared/MyContext';
import Searchbar from './characters-comp/Searchbar';

export default function Nav({setHomePage, homePage, characterPage, setCharacterPage}) {
  const {changeLanguage} = useContext(MyContext)

  return (
    <div className='nav'>
    {characterPage &&<Searchbar/>}
    <section className='nav-sect'>
    {homePage &&
      <NavLink className="nav-link" to="/" onClick={()=>(setHomePage(false), setCharacterPage(false))}> 
      <img  className="nav-link-img"  src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237780/portfolio/Group_ojbauh.png" alt="Home-icon" />  
      </NavLink>
    }
      <NavLink className="nav-link">
        <img  onClick={() => changeLanguage("esp")} className="nav-link-img" src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237190/portfolio/spain_1_wpzpdp.png" alt="Spain-flag"/>
      </NavLink>
      <NavLink className="nav-link">
        <img onClick={() => changeLanguage("eng")} className="nav-link-img" src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237183/portfolio/united-kingdom_1_jkeaph.png" alt="England-flag" />
      </NavLink>
    </section>
    </div>
  );
}
