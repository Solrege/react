import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        setLoading(true)

        pedirDatos ()
            .then( (res) => {
                console.info(itemId)
                setItem( res.find((prod) => prod.id === Number(itemId)))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [itemId])
    
    return (
        <div>
            {
                loading
                ? <Loader/>
                : <ItemDetail item={item}/>
            }
            
        </div>
    )
}

export default ItemDetailContainer