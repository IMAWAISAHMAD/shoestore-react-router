import React from 'react';
import {StoreProvider} from './contexts/StoreContext';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {Products,ProductList,Product} from './components/Products';
import Home from './components/Home';


function App() {
  return (
   <StoreProvider>
     <Router>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/products'>Products</Link>
       </nav>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Routes path='products/*' element={<Products/>}>
            <Route path='/' element={<ProductList/>}/>
            <Route path=':slug' element={<Product/>}/>
         </Routes>
       </Routes>
     </Router>
   </StoreProvider>
  );
}

export default App;
