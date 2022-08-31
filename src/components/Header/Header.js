import CartWidget from "./CartWidget.js"


const Header = () => {

    return (
        <div>
            <header>
                <h1 className="title"> Tienda de Cupcakes</h1>

                <nav className="navBar">
                    <a href="#">Inicio</a>
                    <a href="#">About</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                    <a href="#"><CartWidget/></a>
                </nav>
            </header>
        </div>

    )
}

export default Header