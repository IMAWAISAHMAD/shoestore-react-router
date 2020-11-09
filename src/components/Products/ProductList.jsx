import React,{useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import {CartContext} from '../../contexts/CartContext';
import Product from './Product';
export default function ProductList() {
    const products = useContext(StoreContext);
    console.log(products);
    const {cart,addToCart} = useContext(CartContext);
    console.log('cart',cart);
    return (
        <div style={{display:'flex',marginTop:'100px',flexWrap:'wrap',alignItems:'center'}}>
            {products.map((product)=>(
                <Product key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </div>
    )
}
