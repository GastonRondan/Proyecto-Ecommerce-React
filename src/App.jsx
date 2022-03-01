import './App.css';
import ItemListConteiner from './components/Catalogo/ItemListConteiner';
import ComponenteClase from './components/HeroSection/HeroSection';
import { NavBar} from './components/NavBar/NavBar';
import './components/Catalogo/Catalogo.css';
import './components/HeroSection/HeroSection.css';
import ItemCount from './components/ItemCount/ItemCount';
import Div from './components/Div/Div';

function App() { // Componente contenedor
  return (
    <div className="App">
      <NavBar/>
      <ComponenteClase/>
      <ItemListConteiner greeting='Juan'/>
      <ItemListConteiner greeting='Lucas'/>
      <ItemListConteiner greeting='Alan'/>
      <ItemCount div = {Div} />
    </div>
  );
}

export default App;
