import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)
        

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef
        

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
       
    }, [categoryId])


    return (
        <div>
            {
                loading
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer