import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash } from "react-icons/fa";

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

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
    </div>
  )

  
}

export default Cart