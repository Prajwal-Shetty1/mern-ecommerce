import React from "react";
import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_cost = 30;
    const values = {
        products , currency ,delivery_cost
    }
    return(
           <ShopContext.Provider value={values}>
                  {props.children}
           </ShopContext.Provider>
    )
}
export default ShopContextProvider;