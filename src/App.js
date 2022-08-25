import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header.js'
import ItemListContainer from './components/ItemListContainer.js'
import img1 from "./assets/cupcake-chococake.jpg"
import img2 from "./assets/cupcake-vainilla.jpg"
import img3 from "./assets/cupcake-lemon-pie.jpg"

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="container">
          <ItemListContainer producto="Cupcake de Chocolate" precio="1250" img= {img1} />
          <ItemListContainer producto="Cupcake de Vainilla" precio="1100" img= {img2} />
          <ItemListContainer producto="Cupcake de Lemon Pie" precio="1200" img= {img3} />
        </div>
    </div>
  );
}

export default App;
