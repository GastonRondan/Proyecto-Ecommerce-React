import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { stock } from '../../data/stock'
import getFirestoreApp from "../../firebase/config"
import { listarArray} from "../helpers/listarArray"
import { ItemList } from './ItemList'
import './ItemListContainer.css'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

export const ItemListContainer =() =>{

  
  const [items, setItems] = useState([])
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()
  
   // useEffect(() => {
    //  if(categoriaId){
     //   listarArray(stock)
     //   .then((res) =>{ setItems(res.filter(producto => producto.categoria===categoriaId))
     //   })
     //   .catch((err)=>console.log(err))
     //   .finally(()=>{
     //   setLoading(false)
     //   })
     //   return()=>{

    //    }
    //  }else{
      /*   listarArray(stock)
        .then((res) =>{ setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
        setLoading(false)
        })
        return()=>{

        } */

/* 
      }
    }, [categoriaId]) */

  //  useEffect(() =>{
   //    const db = getFirestore()
    //   const queryDb = doc(db, 'items', detalleId)
    //   getDoc(queryDb)
    //  .then(resp => setItem( {id: resp.id, ...resp.data()} ))
   //  .then(resp => console.log(resp))
  //  },[])

    useEffect(() =>{
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      getDocs(queryCollection)
      .then(resp => setItems(resp.docs.map(item => ( { id: item.id, ...item.data} ))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [])
console.log(items)
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
