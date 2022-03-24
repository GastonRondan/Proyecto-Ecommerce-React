import { useCartContext } from "../../context/CartContext"



function Cart() {
    const { cart, vaciarCart } = useCartContext()
    console.log(cart)
    return(
        <div>
            Carrito
            {  cart.map(item => <li>{item.title} precio: {item.price} cantidad: {item.cantidad}</li>) }
            <button onClick={vaciarCart}> Vaciar Carrito</button>
        </div>
    )
}

export default Cart