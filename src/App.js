import MainContent from './components/MainContent';
import Encabezado from './components/encabezado/Encabezado';
import { NavBar} from './components/navbar/NavBar';
import './App.css';
import { ItemListContainder } from './components/ItemlListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Encabezado></Encabezado>
      <NavBar></NavBar>
      <ItemListContainder></ItemListContainder>
      <MainContent/>
    </>
  );
}

export default App;
