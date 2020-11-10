import React,{createContext,useReducer} from 'react';
import cartReducer from '../reducers/cartReducer';

const initialState ={
    cart:[]
};

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer,initialState);
    const addToCart = (product) =>{
        dispatch({type:'ADD_TO_CART',payload:product});
    };

    const increaseQty = (id) =>{
        dispatch({type:'INCREASE_QTY',payload:id});
    };
    const decreaseQty = (id) =>{
        dispatch({type:'DECREASE_QTY',payload:id});
    };
    const removeFromCart = (id) =>{
        dispatch({type:'REMOVE_FROM_CART',payload:id});
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const itemsInCart = state.cart.map(product=>product.quantity).reduce(reducer,0);
    const totalAmount = state.cart.map(product=>product.quantity*product.price).reduce(reducer,0);
    return(
        <CartContext.Provider value={{cart:state.cart,addToCart,increaseQty,decreaseQty,removeFromCart,itemsInCart,totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}