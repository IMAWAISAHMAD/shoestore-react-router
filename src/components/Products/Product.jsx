import React from 'react'

export default function Product({product}) {
    return (
        <div style={{margin:'50px'}}>
            Product Component
 
        <h3>{product.title}</h3>
        <h3>{product.slug}</h3>
        <div>
            <img style={{width:'500px',height:'450px'}} src={product.image} alt={product.title}/>
        </div>
        <h2>{`Price: ${product.price}$`}</h2>
        </div> 
    )
}
