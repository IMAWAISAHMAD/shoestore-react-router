import React,{useContext,useState,useEffect} from 'react';
import {CartContext} from '../../contexts/CartContext';

export default function Cart() {
    const {cart,decreaseQty,increaseQty,removeFromCart,itemsInCart,totalAmount} = useContext(CartContext);
    const [myCart,setMyCart] = useState([]);
    
    useEffect(()=>{
        setMyCart(cart)
    },[cart])
   
    return (
        <div>
            <h1>Cart Component</h1>
            <h1> {`Total Items In Cart: ${itemsInCart}  | Total Amount:${totalAmount}$`}</h1>
            {myCart.length?
                (
                myCart.map((product)=>(
                    <div key={product.id}>
                    <h3>{product.title}</h3>
                    <h3>{product.slug}</h3>
                    <div>
                        <img style={{width:'500px',height:'450px'}} src={product.image} alt={product.title}/>
                    </div>
                    <h2>{`Price: ${product.price}$`}</h2>
                    <br/>
                    <div>
                        <button onClick={()=>decreaseQty(product.id)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={()=>increaseQty(product.id)}>+</button>
                    </div>
                    <button onClick={()=>removeFromCart(product.id)}>Remove</button>
                    </div>
                    
                ))
                )
                :
                (
                <h3>Your Cart Is Empty</h3>
                )   
            }
        </div>
    )
}
