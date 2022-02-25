import './App.css';
import ItemListConteiner from './components/Catalogo/ItemListConteiner';
import ComponenteClase from './components/HeroSection/HeroSection';
import { NavBar} from './components/NavBar/NavBar';

function App() { // Componente contenedor
  return (
    <div className="App">
      <NavBar/>
      <ComponenteClase/>
      <ItemListConteiner/>
    </div>
  );
}

export default App;
