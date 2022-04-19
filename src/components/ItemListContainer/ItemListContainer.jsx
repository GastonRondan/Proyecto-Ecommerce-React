import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from './ItemList'
import './ItemListContainer.css'
import { collection, query, getDocs, getFirestore, where } from 'firebase/firestore'

export const ItemListContainer =() =>{

  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() =>{
      const db = getFirestore()
      if (categoriaId) {
      const queryCollection = collection(db, 'items')
      const queryFilter = query( queryCollection, where('categoria', '==', categoriaId) )
      getDocs(queryFilter)
      .then(resp => setItems(resp.docs.map(item => ( { id: item.id, ...item.data()} ))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      }else{
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setItems(resp.docs.map(item => ( { id: item.id, ...item.data()} ))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
    }, [categoriaId])

    return (
      <div className="item-list-container">
     {
       loading?
       <div className="cargando">Cargando...</div>
       :
       <ItemList items={items} />
      }
   </div>
 ) 
}

export default ItemListContainer
