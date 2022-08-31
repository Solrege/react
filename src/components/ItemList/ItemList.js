import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {productos = [] } ) => {

  return (
    <section className="container my-5">
            <h2>Productos</h2>
            <hr/>
                { productos.map((prod) => {
                    return (
                    <Item producto={prod}/> 
                  )}
                )}
                      
    </section>
  )
}

export default ItemList