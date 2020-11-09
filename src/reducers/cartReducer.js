const cartReducer = (state,action) =>{
    switch(action.type){

        case 'ADD_TO_CART':
        console.log('ADD_TO_CART ACTION CALLED');  
        if (!state.cart.find((product)=>product.id===action.payload.id))
        {
            state.cart.push({
                ...action.payload,
              })
        }
        return {
            cart:[...state.cart]
        }

        default:
           return state;    

    }
}
export default cartReducer;

