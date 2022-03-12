import React, { useEffect, useState } from "react"
import { stock } from "../../data/stock"
import { Detalle } from "../helpers/listarArray"
import ItemDetail from "./ItemDetail"

export const ItemDetailContainer =() =>{
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)

   useEffect(() => {
       setLoading(true)
       Detalle(stock)
       .then(res => setProducto(res.find(prod => prod.id === 3)))
       .catch((err)=>console.log(err))
        .finally(()=>{
        setLoading(false)
        })
       },[])
      console.log(producto)
return (
  <div className="item-list-container">
  {
   loading?
   <div className="cargando">Cargando...</div>
   :
   <ItemDetail producto={producto} />
  }
</div>
) 
}
  
export default ItemDetailContainer