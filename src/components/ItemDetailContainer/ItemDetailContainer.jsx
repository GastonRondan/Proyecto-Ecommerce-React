import { doc, getDoc, getFirestore } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

export const ItemDetailContainer =() =>{
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(false)
  const { detalleId } = useParams()

    useEffect(() =>{
      const db = getFirestore()
      const queryDb = doc(db, 'items', detalleId)
       getDoc(queryDb)
      .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
      .catch(err => console.log(err))
     .finally(() => setLoading(false))
    },[])

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