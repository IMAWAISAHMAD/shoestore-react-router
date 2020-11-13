import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import {Grid,Card,CardContent,CardHeader,Typography, CardActions,Button} from '@material-ui/core'
export default function Checkout() {
    const {itemsInCart,totalAmount,resetCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleRedirect = () => {
        resetCart();
        navigate('/');
    }
    return (
        <div style={{marginTop:'100px'}}>
            <Grid container justify='center'>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                        title="Order Summary"
                        subheader={new Date().toDateString()}
                        />
                        <CardContent>
                        <Typography variant='h6' color='primary'>
                        {`Total Items: ${itemsInCart}`}
                        </Typography>
                        <Typography variant='h6' color='primary'>
                            {`Total Amount: ${totalAmount}$`}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                            variant='contained'
                            color='primary'
                            onClick={()=>handleRedirect()}
                            >
                            Confirm Order
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
