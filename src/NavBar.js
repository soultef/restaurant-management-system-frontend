import React, {useState} from 'react'
import { FaSearch} from 'react-icons/fa';
import { FaUser,FaCartShopping } from 'react-icons/fa6';
import './CSS/NavBar.css'



function NavBar() {

  return (
    <nav className='nav-bar'>
      <ul className='menu-nav-link'>
        <li><a href="#">Logo</a></li>
        <li><a href="#">MENUE</a></li>
        <li><a href="#">SPECIALS</a></li>
        <li><a href="#">RESERVE</a></li>
        <li><a href="#">JOBS</a></li>
        <li><a href="#">LOCATION</a></li> 
      </ul>

      <ul className='cart-nav-link'>
        <li><a href="#"><FaSearch/></a></li>
        <li><a href="#"><FaCartShopping/></a></li>
        <li><a href="#"><FaUser/></a></li>
        <li className='order-link'><a href="#">ORDER NOW</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
