import React from 'react'
import { NavLink} from 'react-router-dom'

export default function Nav({setHomePage, homePage}) {
  return (
    <div className='nav'>
    {homePage &&
      <NavLink className="nav-link" to="/" onClick={()=>setHomePage(false)}> 
      <img  className="nav-link-img"  src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237780/portfolio/Group_ojbauh.png" alt="Home-icon" />  
      </NavLink>
    }
      <NavLink className="nav-link">
        <img className="nav-link-img" src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237190/portfolio/spain_1_wpzpdp.png" alt="Spain-flag"/>
      </NavLink>
      <NavLink className="nav-link">
        <img className="nav-link-img" src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1691237183/portfolio/united-kingdom_1_jkeaph.png" alt="England-flag" />
      </NavLink>
    </div>
  );
}
