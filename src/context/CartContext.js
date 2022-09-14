import { createContext, useState } from 'react'
import Swal from 'sweetalert2'


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const addToCart = (item) => {
    setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const removeItem = (id) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Se borrará tu producto seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart( cart.filter((item) => item.id !== id) 
                )}
          })
        
    }

    const emptyCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Se borrarán todos los productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    return (
        <CartContext.Provider value= { {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
          } }>
            {children}
        </CartContext.Provider>
    )
}
