import React from 'react';
import ComponenteImagen from './IconoCart';
import './NavBar.css'

const NavBar = () => {
 return(
     <ul>
            <li>Logo</li>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Sobre nosotros</li>
         <div className='contenedorCarrito'>
            <ComponenteImagen className='Carrito'/>
         </div>
        </ul>
 )
}

export { NavBar }