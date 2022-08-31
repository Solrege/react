import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header/Header.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="container">
          <ItemListContainer/> 
        </div>
    </div>
  );
}

export default App;
