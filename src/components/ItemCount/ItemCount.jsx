import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState( initial )


    const increaseCount = () => {
        if (count < stock) {
            setCount ( count + 1 )
        }
    }

    const decreaseCount = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    
    const agregar = () => {
        onAdd( count )
    
    }

    return (
        <div>

            <button onClick={ decreaseCount }>-</button>
            <label>{count}</label>
            <button onClick={ increaseCount }>+</button>
            <br/>
            <button onClick={ agregar }>Agregar al carrito</button>
             
             
        </div>
    )
}

export default ItemCount