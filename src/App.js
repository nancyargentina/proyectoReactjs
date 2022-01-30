import MainContent from './components/MainContent';
import Encabezado from './components/Encabezado';
import BarraNavegacion from './components/BarraNavegacion';
import './App.css';

function App() {
  return (
    <>
      <Encabezado></Encabezado>
      <BarraNavegacion></BarraNavegacion>
      <MainContent/>
    </>
  );
}

export default App;
