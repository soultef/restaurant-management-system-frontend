import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { FaUser, FaCartShopping } from 'react-icons/fa6';
import '../CSS/NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="nav-bar">
      
      <ul className="menu-nav-link">
        <li onClick={toggleSidebar}>
          <FaBars />
        </li>
        <li><NavLink to="/">LOGO</NavLink></li>
        <li><NavLink to="/menue">MENUE</NavLink></li>
        <li><NavLink to="/specials">SPECIALS</NavLink></li>
        <li><NavLink to="/reserve">RESERVE</NavLink></li>
        <li><NavLink to="/jobs">JOBS</NavLink></li>
        <li><NavLink to="/location">LOCATION</NavLink></li>
        
  
      </ul>

      
      <ul className={`menu-side-bar ${sidebarOpen ? 'show' : ''}`}>
        <li onClick={toggleSidebar}>
          <FaTimes />
        </li>
         <li><NavLink to="/">LOGO</NavLink></li>
        <li><NavLink to="/menue">MENUE</NavLink></li>
        <li><NavLink to="/specials">SPECIALS</NavLink></li>
        <li><NavLink to="/reserve">RESERVE</NavLink></li>
        <li><NavLink to="/jobs">JOBS</NavLink></li>
        <li><NavLink to="/location">LOCATION</NavLink></li>
      </ul>

      
      <ul className="cart-nav-link">
        <li><NavLink to="/cart"><FaSearch /></NavLink></li>
        <li><NavLink to="/cart"><FaCartShopping/></NavLink></li>
        <li><NavLink to="/login"><FaUser/></NavLink></li>
        <li className="order-link"><NavLink to="/menue">ORDER NOW</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
