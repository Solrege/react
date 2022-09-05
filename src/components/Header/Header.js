import CartWidget from "./CartWidget.js"
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <div>
            <header>
                <h1 className="title"> Emma Repostería</h1>

                <nav className="navBar">
                    <Link to="/">Inicio</Link>
                    <Link to="/productos/cupcakes">Cupcakes</Link>
                    <Link to="/productos/tortas">Tortas</Link>
                    <Link to="/productos/dulces">Dulces</Link>
                    <Link to="#"><CartWidget/></Link>
                </nav>
            </header>
        </div>

    )
}

export default Header