import { useState } from "react";

function ItemCount({ div }) {
    const [count, setCount] = useState( 0 )


    const handleCount = () => {
        setCount ( count + 1 )
    }


    return (
        <div>
            {div()}

            <label>{count}</label>
            <button onClick={ handleCount }>Click para sumar</button>
        </div>
    )
}

export default ItemCount