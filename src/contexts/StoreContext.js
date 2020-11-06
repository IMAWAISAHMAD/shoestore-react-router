import React,{createContext} from 'react';
import {products} from '../utils/productService';

export const StoreContext = createContext(products);

export const StoreProvider = ({children})=>{
    return(
    <StoreContext.Provider value={products}>
        {children}
    </StoreContext.Provider>
    )
}