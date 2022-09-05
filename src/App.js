import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {

  return (
    
    <div className="App">
      
        <BrowserRouter>
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/>  }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer/>  }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='*'/>
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
