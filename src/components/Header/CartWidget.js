import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    return (
        <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span> { cartQuantity() } </span>
        </Link>
        
    )

}

export default CartWidget