import { useContext, useState } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'


const ItemDetail = ( {item}) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)
    
    const [cantidad, setCantidad] = useState (1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }
        
        
        addToCart(itemToCart)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }

    if (!item) {
        return
    }

    return (
        <div className='container'> 
            <div className="card">
            <img src={item.img} className="card-img-top" alt={item.nombre} title={item.nombre}></img>
                <div className="card-body">
                    <h3 className="card-title">{item.nombre}</h3>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text">Precio:$ {item.precio}</p>

                    {
                        isInCart(item.id)
                        ? <Link to="/cart" className="btn">Terminar mi compra</Link>
                        : <ItemCount 
                            max={item.stock} 
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAgregar={handleAgregar}/>
                    }
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default ItemDetail