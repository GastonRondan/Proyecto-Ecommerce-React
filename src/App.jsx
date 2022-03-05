import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteClase from './components/HeroSection/HeroSection';
import { NavBar} from './components/NavBar/NavBar';
import './components/ItemListContainer/ItemListContainer.css';
import './components/HeroSection/HeroSection.css';
import ItemCount from './components/ItemCount/ItemCount';
import Div from './components/Div/Div';

function App() { // Componente contenedor
  return (
    <div className="App">
      <NavBar/>
      <ComponenteClase/>
      <ItemListContainer/>
      <ItemCount div = {Div} />
    </div>
  );
}

export default App;
