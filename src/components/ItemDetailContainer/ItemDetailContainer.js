import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
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