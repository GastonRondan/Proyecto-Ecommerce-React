import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteClase from './components/HeroSection/HeroSection';
import { NavBar} from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/HeroSection/HeroSection.css';

function App() { // Componente contenedor
  return (
    <CartContextProvider value={{}}>
       <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} /> 
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </CartContextProvider>
   
  );
}

export default App;
