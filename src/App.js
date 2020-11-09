import React from 'react';
import {StoreProvider} from './contexts/StoreContext';
import {CartProvider} from './contexts/CartContext';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {Products,ProductList,ProductDetail} from './components/Products';
import Cart from './components/Cart/Cart';
import Home from './components/Home';


function App() {
  return (
   <StoreProvider>
     <CartProvider>
     <Router>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/products'>Products</Link>
         <Link to='/cart'>Cart</Link>
       </nav>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='cart' element={<Cart/>}/>
         <Routes path='products' element={<Products/>}>
            <Route path='/' element={<ProductList/>}/>
            <Route path=':slug' element={<ProductDetail/>}/>
         </Routes>
       </Routes>
     </Router>
     </CartProvider>
   </StoreProvider>
  );
}

export default App;
