import React from 'react'


const ItemCount = ({max, counter, setCounter, handleAgregar}) => {

    const restar = () => {
            if (counter > 0) {
                setCounter(counter - 1)
            }
        }

    const sumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

   

  return (
    <div> 
        <h5>Comprar</h5>
        <button onClick={restar} className="btn">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={sumar} className="btn">+</button>

        <button onClick={handleAgregar} className="btn">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount