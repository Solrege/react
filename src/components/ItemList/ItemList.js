import React from 'react'
import ItemCount from "../ItemListContainer/ItemCount"

const ItemList = ( {productos = [] } ) => {

  return (
    <section className="container my-5">
            <h2>Productos</h2>
            <hr/>
                { productos.map((prod) => {
                    return <div className="card">
                                <div key={prod.id}>
                                    <img src={prod.img} className="card-img-top" alt={prod.nombre} title={prod.nombre}></img>
                                    <div className="card-body">
                                        <h3 className="card-title">{prod.nombre}</h3>
                                        <p className="card-text">Descripción: Venta por Unidad</p>
                                        <p className="card-text">Precio:$ {prod.precio}</p>
                                        <ItemCount/>
                                    </div>
                                </div>
                            </div>
                })}
    </section>
  )
}

export default ItemList