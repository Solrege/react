import React from 'react'
import { useState } from 'react'


const ItemCount = () => {

    const [counter, setCounter] = useState (0)

    const sumar = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

  return (
    <div className="container my-5"> 
        <h2>Comprar</h2>
        <button onClick={restar} className="btn">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={sumar} className="btn">+</button>
    </div>
  )
}

export default ItemCount