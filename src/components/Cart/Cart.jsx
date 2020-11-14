import React,{useContext,useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import {Grid,Card,CardContent,Typography,Button,ButtonGroup} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                    <Grid item sm={12} md={2}>
                        <Card>
                            <CardContent>
                            <img style={{width:'100%'}} src={product.image} alt={product.title}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={12}  md={6}>
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
            {myCart.length?(
                <ButtonGroup style={{marginTop:'50px'}}>
                    <Button
                    variant='contained' 
                    onClick={()=>navigate('/checkout')}
                    >
                    Checkout
                    </Button>
                    <Button 
                    startIcon={<ArrowBackIcon/>} 
                    variant='contained' 
                    fullWidth
                    onClick={()=>navigate('/')}>
                        Go Back
                    </Button>
                </ButtonGroup>
            )
            :null }
        </Grid>
        </div>
        
    )
}
