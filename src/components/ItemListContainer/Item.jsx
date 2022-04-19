import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Item = ({title, description, price, imgUrl, stock, id}) => {
    const onAdd = cant =>{
        console.log(cant)
    }
    return (
        <div className='item'>
            <div className='title'>{title}</div>
            <img src={imgUrl} alt={title} />
            <div className='price'>{`$${price}`}</div>
            <div className='description'>{description}</div>
            <div>
            <Link to={`/detalle/${id}`}>
            <button>Ver detalles del producto</button>
            </Link>
            </div>
           <div className='stock'>stock disponible: {stock}</div>
        </div>
    )
}