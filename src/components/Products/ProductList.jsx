import React,{useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import {CartContext} from '../../contexts/CartContext';
import Product from './Product';
import {Grid ,makeStyles} from '@material-ui/core'; 

const useStyles =  makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(10)
    }
}))

export default function ProductList() {
    const classes = useStyles();
    const products = useContext(StoreContext);
    const {addToCart} = useContext(CartContext);
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {products.map((product)=>(
                    <Grid item  xs={12} sm={4} md={3} key={product.id}>
                        <Product product={product} addToCart={addToCart}/>
                    </Grid>
                ))}
            </Grid> 
        </div>   
    )
}
