import React,{useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import Product from './Product';
export default function ProductList() {
    const products = useContext(StoreContext);
    console.log(products);
    return (
        <div style={{display:'flex',marginTop:'100px',flexWrap:'wrap',alignItems:'center'}}>
            {products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}
