import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {



  return (
    
    <div className="App">
      
      <CartProvider>

        <BrowserRouter>
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/>  }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer/>  }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*'/>
            
          </Routes>

        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;
