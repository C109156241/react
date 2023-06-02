import './App.css';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Product from './pages/product';
import Cart from './pages/cart';
import Personal from './pages/personal';
function App() {
  return(
    <div>
      <Header/>
      
        <Routes>
          <Route path="/" exact element={<Product/>}>首頁</Route>
          <Route path="/signin" exact element={<Signin/>}></Route>
          <Route path="/cart" exact element={<Cart/>}></Route>
          <Route path="/personal" exact element={<Personal/>}></Route>
          
        </Routes>
    </div>
  )
}

export default App;
