import React from 'react';
import {StoreProvider} from './contexts/StoreContext';
import {CartProvider} from './contexts/CartContext';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Products,ProductList,ProductDetail} from './components/Products';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
   <StoreProvider>
     <CartProvider>
     <Router>
     <Header/>
       <Routes>
         <Route path='/' element={<ProductList/>}/>
         <Route path='cart' element={<Cart/>}/>
         <Route path='checkout' element={<Checkout/>}/>
         <Route path='products/*' element={<Products/>}>
            <Route path='/' element={<ProductList/>}/>
            <Route path=':slug' element={<ProductDetail/>}/>
         </Route>
         
       </Routes>
     </Router>
     </CartProvider>
   </StoreProvider>
  );
}

export default App;
