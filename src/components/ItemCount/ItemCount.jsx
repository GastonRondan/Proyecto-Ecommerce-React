import { useState } from "react";

function ItemCount({ div }) {
    const [count, setCount] = useState( 0 )


    const increaseCount = () => {
        setCount ( count + 1 )
    }

    const decreaseCount = () => {
        setCount ( count - 1 )
    }


    return (
        <div>
            {div()}

            <label>{count}</label>
            <button onClick={ increaseCount }>Click para sumar</button>
            <button onClick={ decreaseCount }>Click para restar</button>
        </div>
    )
}

export default ItemCount