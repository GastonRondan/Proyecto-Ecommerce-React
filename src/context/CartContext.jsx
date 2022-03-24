import React, { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])

    const agregarCart = (item) =>{
        setCart([...cart, item])
    }

    const vaciarCart =() =>{
        setCart( [])
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarCart,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider