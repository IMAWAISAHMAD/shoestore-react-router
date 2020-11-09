import React from 'react';
import {Link} from 'react-router-dom';
export default function Product({product,addToCart}) {

    return (
        <div style={{margin:'50px'}}>
            Product Component
        <Link to={`/products/${product.slug}`}>
        <h3>{product.title}</h3>
        <h3>{product.slug}</h3>
        <div>
            <img style={{width:'500px',height:'450px'}} src={product.image} alt={product.title}/>
        </div>
        <h2>{`Price: ${product.price}$`}</h2>
        </Link>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div> 
    )
}
