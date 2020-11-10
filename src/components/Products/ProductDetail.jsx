import React,{useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import {useParams,useNavigate}  from 'react-router-dom';

export default function ProductDetail() {
    const {slug} = useParams();
    const products = useContext(StoreContext);
    const product = products.find(product=>product.slug===slug);
    const navigate = useNavigate();
    
    return (
        <div>
           <h5>Product Detail Component</h5> 
           <h3>{product.title}</h3>
            <h3>{product.slug}</h3>
            <div>
                <img style={{width:'500px',height:'450px'}} src={product.image} alt={product.title}/>
            </div>
            <h2>{`Price: ${product.price}$`}</h2>
            <button onClick={()=>navigate('/')}>Go Back</button>
        </div>       
    )
}
