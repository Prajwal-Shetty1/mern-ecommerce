import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div
          className='filter-heading'
          onClick={() => setShowFilter(!showFilter)} >
          <p>FILTERS <img src={assets.dropdown_icon} alt="icon" /></p>
        </div>
      )}

      {(showFilter || !isMobile) && (
        <div className='filter-section'>
          {/* Category filter */}
          <div className='filter-categories'>
            <p>CATEGORIES</p>
            <p><input type="checkbox" value="Men" /> Men</p>
            <p><input type="checkbox" value="Women" /> Women</p>
            <p><input type="checkbox" value="Kids" /> Kids</p>
          </div>

          {/* SubCategory filter */}
          <div className='filter-subcategories'>
            <p>TYPES</p>
            <p><input type="checkbox" value="TopWear" /> TopWear</p>
            <p><input type="checkbox" value="BottomWear" /> BottomWear</p>
            <p><input type="checkbox" value="WinterWear" /> WinterWear</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Collection;
