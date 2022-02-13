import Encabezado from './components/encabezado/Encabezado';
import { NavBar} from './components/navbar/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemlListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Contacto } from './components/pages/Contacto';
import {Galeria} from './components/pages/Galeria';
import {UnPocoDeMi} from './components/pages/UnPocoDeMi';
import {EstilosNail}from './components/pages/EstilosNail'

function App() {
  return (
    <BrowserRouter>
      <Encabezado></Encabezado>
      <NavBar></NavBar>
      <Routes>
        <Route path={'/'}element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path={'/galeria'}element={<Galeria></Galeria>}></Route>
        <Route path={'/unPocoDeMi'}element={<UnPocoDeMi></UnPocoDeMi>}></Route>
        <Route path={'/estilosNail'}element={<EstilosNail></EstilosNail>}></Route>
        <Route path={'/contacto'}element={<Contacto></Contacto>}></Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
