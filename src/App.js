import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';


function App() {

  /*const [cart, setCart] = useState ([])*/

  return (
    
    <div className="App">
      
      <CartContext.Provider value= { {} }>

        <BrowserRouter>
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/>  }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer/>  }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*'/>
            
          </Routes>

        </BrowserRouter>

      </CartContext.Provider>
    </div>
  );
}

export default App;
