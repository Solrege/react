import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
      </div>
  )}

  return (
    <div className='container my-5'>
      <h2>Carrito</h2>
      <hr/>

        { cart.map((item) => (
          <div key={item.id}>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => removeItem(item.id)} className='btn'><FaTrash/></button>
            <hr/>
          </div>
        ))}

      <p>Total: ${cartTotal()}</p>
      <button onClick={emptyCart} className='btn'>Vaciar carrito</button>
      <Link className="btn" to="/checkout">Terminar mi compra</Link>
    </div>
  )

  
}

export default Cart