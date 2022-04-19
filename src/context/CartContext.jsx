import React, { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])

    const agregarCart = (item) =>{
        
        setCart([...cart, item])
    }

    const precioTotal =() =>{
        return cart.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }
    
    const cantidadTotalItem = () => {
        return cart.reduce((acum, prod) => acum += prod.cantidad, 0)
    }

    const removeItem =(id) =>{
       setCart( cart.filter(item => item.id !== id) ) 
    }

    const vaciarCart =() =>{
        setCart( [])
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarCart,
            vaciarCart,
            precioTotal,
            removeItem,
            cantidadTotalItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider