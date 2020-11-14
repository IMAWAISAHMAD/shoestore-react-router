import React,{useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Link as MuiLink,Badge,makeStyles} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
    },
    nav:{
        flexGrow:1,
        '& .MuiTypography-root':{
            marginLeft:theme.spacing(1),
        }
    }
}))
export default function Header() {
    const classes = useStyles();
    const {itemsInCart} = useContext(CartContext);
    return (
        <>
        <AppBar className={classes.root}>
            <Toolbar variant='dense'>
                <Typography className={classes.title}>
                    Shoe Store
                </Typography>
                <div className={classes.nav}>
                    <MuiLink underline='none' color='inherit' component={Link} to='/'>Home</MuiLink>
                    <MuiLink underline='none' color='inherit' component={Link} to='/products'>Products</MuiLink>
                </div>
                <MuiLink underline='none' color='inherit'  component={Link} to='/cart'>
                    <Badge badgeContent={itemsInCart} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </MuiLink>
            </Toolbar>
        </AppBar>
        </>
        
    )
}

