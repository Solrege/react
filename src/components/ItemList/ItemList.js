import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {productos = [] } ) => {

  return (
    <section className="container my-5">
            <h2 className='subtitle'>Productos</h2>
            <hr/>
                { productos.map((prod) => {
                    return (
                    <Item producto={prod} key={prod.id}/> 
                  )}
                )}
                      
    </section>
  )
}

export default ItemList