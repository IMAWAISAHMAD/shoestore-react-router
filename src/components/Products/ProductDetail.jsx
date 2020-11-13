import React,{useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import {CartContext} from '../../contexts/CartContext';
import {useParams,useNavigate}  from 'react-router-dom';
import {ProductSlider} from './';
import {Grid,Card,CardContent,CardActions,Typography,Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function ProductDetail() {
    const {slug} = useParams();
    const {addToCart} = useContext(CartContext);
    const products = useContext(StoreContext);
    const product = products.find(product=>product.slug===slug);
    const navigate = useNavigate();
    
    return (
        <div style={{marginTop:'80px'}}>
         <Grid container justify='center'>
             <Grid item xs={12} md={8}>
                <ProductSlider sliderImages={product.sliderImages}/>
             </Grid>
             <Grid item xs={12} md={4}>
                 <Card>
                     <CardContent>
                         <Typography variant='h5'>
                             Product Details
                         </Typography>
                         <hr/>
                         <Typography variant='h6' gutterBottom>
                         {`Product Name: ${product.title}`}
                         </Typography>
                         <Typography variant='body1' gutterBottom color='textSecondary'>
                         {`Slug: ${product.slug}`}
                         </Typography>
                         <Typography variant='h5' gutterBottom color='primary'>
                         {`Price: ${product.price}$`}
                         </Typography>  
                     </CardContent>
                     <CardActions>
                        <Button
                        startIcon={<AddShoppingCartIcon/>} 
                        color='primary'
                        variant='outlined'
                        fullWidth
                        onClick={()=>addToCart(product)}
                        >
                            Add To Bag
                        </Button>
                        <Button 
                        startIcon={<ArrowBackIcon/>} 
                        variant='outlined' 
                        fullWidth
                        onClick={()=>navigate('/')}>
                            Go Back
                        </Button>
                     </CardActions>
                 </Card>
             </Grid>
         </Grid>
         </div> 
    )
}

