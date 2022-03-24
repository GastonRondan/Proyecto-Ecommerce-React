import React from 'react';
import { NavLink } from 'react-router-dom';
import ComponenteImagen from './IconoCart';
import './NavBar.css'

const NavBar = () => {
 return(
     <ul className='NavBar'>   
            <NavLink to='/' className='NavLink'>Logo</NavLink>
            <NavLink to='/' className='NavLink'>Inicio</NavLink>
            <li className='products'>Productos
               <ul className='productsList'>
                  <li>
                  <NavLink to='/categoria/computadoras'>Computadoras</NavLink>
                  </li>
                  <li><NavLink to='/categoria/teclados'>Teclados</NavLink></li>
                  <li><NavLink to='/categoria/auriculares'>Auriculares</NavLink></li>
                  <li><NavLink to='/categoria/mouse'>Mouse</NavLink></li>
               </ul>
            </li>
            <li>Sobre nosotros</li>
         <NavLink to='/cart' className='contenedorCarrito'>
            <ComponenteImagen className='Carrito'/>
         </NavLink>
        </ul>
 )
}

export { NavBar }