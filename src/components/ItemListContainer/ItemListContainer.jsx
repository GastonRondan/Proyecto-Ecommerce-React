import React, { useEffect, useState } from "react"
import { stock } from '../../data/stock'
import { listarArray } from "../helpers/listarArray"
import { ItemList } from './ItemList'
import './ItemListContainer.css'
export const ItemListContainer =() =>{


   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        listarArray(stock)
        .then((res) =>{ setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
        setLoading(false)
        })
    }, [])

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
