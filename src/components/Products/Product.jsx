import React from 'react';
import {Link} from 'react-router-dom';
import {Card,CardContent,CardActions,Typography,Link as MuiLink,Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Product({product,addToCart}) {
    const {image,title,price} = product;
return (
    
<Card>
    <CardContent>
        <MuiLink  component={Link} to={`/products/${product.slug}`}>
        <img  style={{width:'100%'}}  src={image} alt={product.title}/>
        </MuiLink>
        <Typography variant='body1'>
            {title}
        </Typography>
        <Typography variant='body2'>
            {`${price}$`}
        </Typography>
        <CardActions>
         <Button
          color='primary'
          variant='outlined'
          startIcon={<AddShoppingCartIcon/>}
          fullWidth
          onClick={()=>addToCart(product)}
         >
             Add To Bag
         </Button>
         </CardActions>
    </CardContent>
</Card>
    
)
}
