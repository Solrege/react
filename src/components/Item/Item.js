import React from 'react'
import {Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="card">
        <img src={producto.img} className="card-img-top" alt={producto.nombre} title={producto.nombre}></img>
        <div className="card-body">
            <h4 className="card-title">{producto.nombre}</h4>
            <p className="card-text">Precio: ${producto.precio}</p>
            <Link to={`/item/${producto.id}`} className='btn'>Ver más</Link>
        </div>
    </div>
    )
}

export default Item