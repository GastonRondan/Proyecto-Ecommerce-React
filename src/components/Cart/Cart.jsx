import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"



function Cart() {
    const [dataForm, setDataForm] = useState({
        email: '', name:'', phone:''
    })
    const [id,setId] = useState('')

    const { cart, vaciarCart, precioTotal, removeItem  } = useCartContext()
    console.log(cart)

    const generarOrden= async (e)=>{
        e.preventDefault();

        let orden = {}

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cart.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
           


            return {id, nombre, precio}
        })
        console.log(orden)

        const db = getFirestore()
        //Crear orden
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(() =>console.log )

    //   Actualizo los stocks de 'items'
    //   const queryCollection = collection(db, 'items')

    //    const queryActualizarStock = await query(
    //      queryCollection,
    //      where( documentId(), 'in', cartList.map(it => it.id))
    //    )

    //    const batch = writeBatch(db)

    //    await getDocs(queryActualizarStock)
    //      .then(resp => resp.docs.forEach(resp => batch.update(res.ref,  {
    //         stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    //   })))

    //  batch.commit()

    }
    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    return(
        
        <div>
            <h3>
            Resumen de compra
        </h3>    
            {id.lenght!== '' && `el id de la compra es:${id}`}
            {  cart.map(item => <> <li key={item.id}>
                                 Producto: {item.title} precio: {item.price} cantidad: {item.cantidad}  
                                 <button onClick={() => removeItem(item.id)}> Eliminar producto</button>
                                 <img className="productCartImg" src={item.imgUrl} alt={item.title} />
                                 </li>
                                 </>
                       )
            }
            <div>Total: {precioTotal()}</div>
            <button onClick={vaciarCart}> Vaciar Carrito</button> <hr />
            <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                {/* <button>Generar Orden</button> */}
                <button>Terminar Compra</button>
            </form>

        </div>
    )
}

export default Cart