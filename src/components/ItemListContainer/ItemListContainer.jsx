import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { stock } from '../../data/stock'
import { listarArray} from "../helpers/listarArray"
import { ItemList } from './ItemList'
import './ItemListContainer.css'
export const ItemListContainer =() =>{

  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()
  
    useEffect(() => {
      if(categoriaId){
        listarArray(stock)
        .then((res) =>{ setItems(res.filter(producto => producto.categoria===categoriaId))
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
        setLoading(false)
        })
        return()=>{

        }
      }else{
        listarArray(stock)
        .then((res) =>{ setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
        setLoading(false)
        })
        return()=>{

        }


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
