import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
      <nav className='container'>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/playstation">PlayStation</Link></li>
        <li><Link to="/xbox">Xbox</Link></li>
      </ul>
    </nav>
    )
}

export default NavBar;