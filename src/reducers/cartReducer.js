const cartReducer = (state,action) =>{
    switch(action.type){

        case 'ADD_TO_CART':
        if (!state.cart.find((product)=>product.id===action.payload.id))
        {
            state.cart.push({
                ...action.payload
            })
        }else{
            alert('Item Already Added To Cart')
        }
        return {
            cart:[...state.cart]
        }

        case 'INCREASE_QTY':
        state.cart[state.cart.findIndex(item => item.id === action.payload)].quantity++
        return {
            ...state,
            cart: [...state.cart]
        }

        case 'DECREASE_QTY':
        const itemIndex =  state.cart.findIndex(item => item.id === action.payload);
        if(state.cart[itemIndex].id===action.payload){
            state.cart[itemIndex].quantity===1?state.cart[itemIndex].quantity=1:state.cart[itemIndex].quantity--
        }
        return {
            ...state,
            cart: [...state.cart]
        }
        case 'REMOVE_FROM_CART':
           const result = state.cart.filter(item=>item.id!==action.payload);
        return{
            ...state,
            cart:[...result]
        } 
        case 'RESET_CART':
         return{
             cart:[]
         } 

        default:
           return state;    

    }
}
export default cartReducer;

