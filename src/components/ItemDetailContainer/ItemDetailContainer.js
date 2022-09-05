import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const {itemId} = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        pedirDatos ()
            .then( (res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                console.log("Fin del proceso")
            })
    })
    
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer