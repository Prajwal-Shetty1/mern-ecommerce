import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SearchBar = () => {

    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);
    /*search logo after clicking should always showed in collection page*/
    const location = useLocation();
    const [visible , setVisible] = useState(false);

useEffect(() => {
  if (location.pathname.includes("Collection") && showSearch) {
    setVisible(true);
  } else {
    setVisible(false);
  }
}, [location.pathname , showSearch]);


  return showSearch && visible ?(
    <>
    <div className='search-bar'>
       <div className='showsearch-bar'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search'/>
        <img src={assets.search_icon} alt="" />
       </div>
       <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" />
    </div>
    </>
  ) : null
}

export default SearchBar;
