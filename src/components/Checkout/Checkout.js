import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Navigate } from "react-router-dom"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config"


const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    //const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                terminarCompra(doc.id)
            })
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className='container'>
            <h2 className='subtitle'>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    name="nombre" 
                    onChange={handleInputChange}  
                    value={values.nombre} 
                    type={'text'} 
                    className= "my-3 form-control" 
                    placeholder='Nombre'
                />

                <input 
                    name="email" 
                    onChange={handleInputChange} 
                    value={values.email} 
                    type={'email'} 
                    className= "my-3 form-control" 
                    placeholder='Email'
                />

                <input 
                    name="direccion" 
                    onChange={handleInputChange} 
                    value={values.direccion} 
                    type={'text'} 
                    className= "my-3 form-control" 
                    placeholder='Dirección'
                />

                <button type="submit" className='btn'>Enviar</button>
            </form>
        </div>
    )
}

export default Checkout