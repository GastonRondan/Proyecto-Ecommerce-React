import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteClase from './components/HeroSection/HeroSection';
import { NavBar} from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/HeroSection/HeroSection.css';

function App() { // Componente contenedor
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <ComponenteClase/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} /> 
          
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
