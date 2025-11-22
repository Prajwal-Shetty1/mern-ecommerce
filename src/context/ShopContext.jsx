import React, { useState } from "react";
import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_cost = 30;
    const [search , setSearch] = useState(""); //search logo
    const [showSearch , setShowSearch] = useState(false); //search logo
    const values = {
        products , currency ,delivery_cost,
        search , setSearch , showSearch , setShowSearch
    }
    return(
           <ShopContext.Provider value={values}>
                  {props.children}
           </ShopContext.Provider>
    )
}
export default ShopContextProvider;