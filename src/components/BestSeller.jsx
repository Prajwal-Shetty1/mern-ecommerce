import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));  //bestseller=true (shows)
        setBestSeller(bestProduct.slice(0,5));
    },[products])
  return (
    <>
    <div>
      <Title text1="_____BEST" text2="SELLERS_____"/>
      <p className="desc">Discover our best-selling products loved by everyone for their quality and style!</p>
    </div>
    <div className='rendering-products'>
        {
            bestSeller.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>
    </>
  )
}

export default BestSeller;
