import { useCartContext } from "../../context/CartContext"



function Cart() {
    const { cart, vaciarCart, precioTotal, removeItem  } = useCartContext()
    console.log(cart)

    const generarOrden= async ()=>{

        let orden = {}

        orden.buyer = { name:'luis', phone:'123521', email: 'luis@gmail.com' }
        orden.total = precioTotal();

        orden.items = cart.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
           


            return {id, nombre, precio}
        })
        console.log(orden)
    }
    return(
        <div>
            Carrito
            {  cart.map(item => <> <li key={item.id}>
                                 Producto: {item.title} precio: {item.price} cantidad: {item.cantidad}  
                                 </li>
                                 <button onClick={() => removeItem(item.id)}> eliminar producto</button>
                                 </>
                       )
            }
            <button onClick={vaciarCart}> Vaciar Carrito</button> <hr />
            <button onClick={generarOrden}>Terminar compra</button>
        </div>
    )
}

export default Cart