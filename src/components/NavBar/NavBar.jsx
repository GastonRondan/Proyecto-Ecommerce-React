import React from 'react';
import './NavBar.css'

const NavBar = () => {
 return(
 <ul>
     <li>Logo</li>
     <li>Inicio</li>
     <li>Productos</li>
     <li>Sobre nosotros</li>
     <li className='Carrito'> $0,00</li>
 </ul>
 )
}

export { NavBar }