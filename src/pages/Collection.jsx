import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]); //categories
  const [subCategory, setSubCategory] = useState([]); //Types

  //To initialize categories
  const toggleCategory = (e) =>{
     if (category.includes(e.target.value)) {
       setCategory(prev => prev.filter(item => item !== e.target.value))
     } else {
      setCategory(prev => [...prev,e.target.value])
      
     }
  }
 //To initialize types
 const subtoggleCategory = (e) =>{
  if (subCategory.includes(e.target.value)) {
    setSubCategory(prev => prev.filter(item => item !== e.target.value))
  } else {
    setSubCategory(prev => [...prev,e.target.value])
  }
 }


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
       setFilterProducts(products);
  },[]);
/*
  useEffect(() => {
    console.log(category);
  },[category])

  useEffect(() => {
    console.log(subCategory)
  },[subCategory])
*/
// for image perfection according to men,women,kids,topwear,bottom wear and winter wear
const applyFilter = () => {
  let productsCopy = products.slice()
  if (category.length>0){
    productsCopy = productsCopy.filter(item => category.includes(item.category))
  }
  if (subCategory.length>0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
  }
  setFilterProducts(productsCopy);
}
useEffect(() =>{
  applyFilter();
},[category,subCategory])


  return (
    <>
      {isMobile && (
        <div
          className='filter-heading'
          onClick={() => setShowFilter(!showFilter)} >
          <p>FILTERS <img src={assets.dropdown_icon} alt="icon" /></p>
        </div>
      )}
       <div className="main-layout">  
      {(showFilter || !isMobile) && (
        <div className='filter-section'>
          {/* Category filter */}
          <div className='filter-categories'>
            <p>CATEGORIES</p>
            <p><input type="checkbox" value="Men" onChange={toggleCategory}/> Men</p>
            <p><input type="checkbox" value="Women" onChange={toggleCategory}/> Women</p>
            <p><input type="checkbox" value="Kids" onChange={toggleCategory}/> Kids</p>
          </div>

          {/* SubCategory filter */}
          <div className='filter-subcategories'>
            <p>TYPES</p>
            <p><input type="checkbox" value="Topwear" onChange={subtoggleCategory}/> TopWear</p>
            <p><input type="checkbox" value="Bottomwear" onChange={subtoggleCategory}/> BottomWear</p>
            <p><input type="checkbox" value="Winterwear" onChange={subtoggleCategory}/> WinterWear</p>
          </div>
        </div>
      )}
   {/*Right Side*/}
   <div className="right-column">
     <div className="right-side">
    <div className="flex-1">
      <Title text1={'ALL'} text2={'COLLECTIONS____'} />
    </div>
    {/*Productsort*/}
    <select >
      <option value="relavant">SortBy:Relavant</option>
      <option value="low-high">SortBy:Low-High</option>
      <option value="high-low">SortBy:High-Low</option>
    </select>
      </div> 
      {/*Map products*/}
     <div className='mapping-products'>
      {
        filterProducts.map((item,index) => (
           <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
        ) )
      }
     </div>
</div>
  </div>   
    </>

  );
};
export default Collection;
