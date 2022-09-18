import React from 'react'


const ItemCount = ({max, counter, setCounter, handleAgregar}) => {

    const handleRestar = () => {
            if (counter > 0) {
                setCounter(counter - 1)
            }
        }

    const handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

   

  return (
    <div> 
        <h5>Comprar</h5>
        <button onClick={handleRestar} className="btn">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handleSumar} className="btn">+</button>

        <button disabled={counter === 0} onClick={handleAgregar} className="btn">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount