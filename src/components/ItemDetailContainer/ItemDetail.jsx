import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(null)
    const onAdd = cant =>{
        console.log(cant)
    }
    return (
        <div>
            <div className='item' >
            <div className='title'>{producto.title}</div>
            <img src={producto.imgUrl} />
            <div className='price'>{`$${producto.price}`}</div>
            <div className='description'>{producto.description} </div>
            <div className='stock'>stock disponible: {producto.stock}</div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            
        </div>
        </div>
    )
}

export default ItemDetail