import React,{useContext,useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import {Grid,Card,CardContent,CardActions,Typography,Button} from '@material-ui/core';
export default function Cart() {
    const {cart,decreaseQty,increaseQty,removeFromCart} = useContext(CartContext);
    const [myCart,setMyCart] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        setMyCart(cart)
    },[cart])
   
    return (
        <div style={{marginTop:'80px'}}>
        <Grid container spacing={4} justify='center'>
            {myCart.length?
            (myCart.map((product)=>(
                <Grid container key={product.id} spacing={4}>
                <Grid item md={2}></Grid>
                    <Grid item md={2}>
                        <Card>
                            <CardContent>
                            <img style={{width:'200px',height:'150px'}} src={product.image} alt={product.title}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item  md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6'>
                                {`Product Name: ${product.title}`}
                            </Typography>
                            <hr/>
                            <Typography variant='body1' color='textSecondary' gutterBottom>
                                {`Slug: ${product.slug}`}
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {`Price: ${product.price}$`}
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                Quantity:
                                <Button 
                                variant='text'
                                color='secondary'
                                onClick={()=>decreaseQty(product.id)}
                                >
                                -
                                </Button>
                                <Button
                                variant='text'
                                >
                                   {product.quantity}
                                </Button>
                                <Button 
                                variant='text'
                                color='primary'
                                onClick={()=>increaseQty(product.id)}
                                >
                                +
                                </Button>
                               <Button
                                variant='text'
                                color='secondary'
                                onClick={()=>removeFromCart(product.id)}
                               >
                                Remove 
                               </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={2}></Grid>
                </Grid>
            ))
            ):
            (
             <Typography variant='h3' color='primary'>
                 Your Cart Is Empty
             </Typography>
            ) 
            }
            {myCart.length?<Button variant='contained' onClick={()=>navigate('/checkout')}>Checkout</Button>:null }
        </Grid>
        </div>
        
    )
}
