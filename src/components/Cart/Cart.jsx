import React,{useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';

export default function Cart() {
    const {cart} = useContext(CartContext);
    console.log('Cart Component',cart);
    return (
        <div>
            <h1>Cart Component</h1>
            {cart.map((product)=>(
                <div key={product.id}>
                <h3>{product.title}</h3>
                <h3>{product.slug}</h3>
                <div>
                    <img style={{width:'500px',height:'450px'}} src={product.image} alt={product.title}/>
                </div>
                <h2>{`Price: ${product.price}$`}</h2>
                </div>
            ))
            }
        </div>
    )
}
