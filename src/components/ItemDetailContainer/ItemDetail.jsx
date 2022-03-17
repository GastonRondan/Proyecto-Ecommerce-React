import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(null)
    const onAdd = cant =>{
        console.log(cant)
        setCount(cant)
    }
    return (
        <div>
            <div className='item' >
            <div className='title'>{producto.title}</div>
            <img src={producto.imgUrl} />
            <div className='price'>{`$${producto.price}`}</div>
            <div className='description'>{producto.description} </div>
            <div className='stock'>stock disponible: {producto.stock}</div>
            {  count ? 
                <Link to='/cart'>
                <button className="boton">Ir al Carrito</button>
                </Link>
                :
            
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
            
        </div>
        </div>
    )
}

export default ItemDetail