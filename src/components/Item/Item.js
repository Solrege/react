import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const Item = ( {producto} ) => {
  return (
    <div className="card">
        <img src={producto.img} className="card-img-top" alt={producto.nombre} title={producto.nombre}></img>
        <div className="card-body">
            <h3 className="card-title">{producto.nombre}</h3>
            <p className="card-text">Descripción: Venta por Unidad</p>
            <p className="card-text">Precio:$ {producto.precio}</p>
            <ItemCount/>
        </div>
    </div>
    )
}

export default Item