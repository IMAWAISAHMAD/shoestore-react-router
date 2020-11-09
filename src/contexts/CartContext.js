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
   

    return(
        <CartContext.Provider value={{cart:state.cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}