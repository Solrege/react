import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ( {item}) => {

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
                    <ItemCount/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail