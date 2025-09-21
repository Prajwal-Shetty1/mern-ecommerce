import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink,Link } from 'react-router-dom';
const NavBar = () => {
  const [showDropDown , setShowDropDown] = useState(false);
  return (
    <div className='navbar'>
  <img src={assets.logo} alt="Logo" />
  
  <div className='nav-links'>
    <NavLink to="/"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
      <p>HOME</p>
    </NavLink>
    <NavLink to="/Collection"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
      <p>COLLECTION</p>
    </NavLink>
    <NavLink to="/About"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
      <p>ABOUT</p>
    </NavLink>
    <NavLink to="/Contact"  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
      <p>CONTACT</p>
    </NavLink>
  </div>

  <div className='nav-logo'>
    <div className='nav-search'>
      <img src={assets.search_icon} alt="search"/>
    </div>

    <div className='nav-profile' onClick={() => setShowDropDown(!showDropDown)}>
      <img src={assets.profile_icon} alt="profile" />
      { showDropDown && (
        <div className='dropdown'>
           <a href="/">MyProfile</a>
           <a href="/Orders">Orders</a>
           <button onClick={() => alert("Logged Out!")}>LogOut</button>
        </div>
      )}
    </div>

    <Link to="/Cart" className='nav-cart'>
      <img src={assets.cart_icon} alt="cart" />
      <p>10</p>
    </Link>

    <div className='nav-menu'>
      <img src={assets.menu_icon} alt="menu" />
    </div>
  </div>
</div>
  )}

export default NavBar;
