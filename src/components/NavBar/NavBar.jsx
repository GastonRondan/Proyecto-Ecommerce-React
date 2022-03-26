import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ComponenteImagen from './IconoCart';
import './NavBar.css'

const NavBar = () => {

   const { cantidadTotalItem } = useCartContext()
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
            { cantidadTotalItem () !== 0 && cantidadTotalItem() }
            <ComponenteImagen className='Carrito'/>
         </NavLink>
        </ul>
 )
}

export { NavBar }