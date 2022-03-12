const ItemDetail = ({producto}) => {
    return (
        <div>
            <div className='item'>
            <div className='title'>{producto.title}</div>
            <img src={producto.imgUrl} />
            <div className="price">${producto.price}</div>
            <div className='description'>{producto.description}</div>
            <button>Ver detalles del producto</button>
            <div className='stock'>stock disponible: {producto.stock}</div>
        </div>
        </div>
    )
}

export default ItemDetail