import MainContent from './components/MainContent';
import Encabezado from './components/encabezado/Encabezado';
import { NavBar} from './components/navbar/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemlListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Encabezado></Encabezado>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;
