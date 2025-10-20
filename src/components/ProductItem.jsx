import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import {Link} from "react-router-dom";

const ProductItem = ({id,name,image,price}) => {  //from props
    const {currency} = useContext(ShopContext);     //from shopcontext
  return (
    <Link to={`/Product/${id}`}>
      <div>
        <img src={image[0]} alt="" />
      </div>
      <p>{name}</p>
      <p>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem;

