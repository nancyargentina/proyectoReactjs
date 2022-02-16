import Encabezado from './components/encabezado/Encabezado';
import { NavBar} from './components/navbar/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemlListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Contacto } from './components/pages/Contacto';
import {Galeria} from './components/pages/Galeria';
import {UnPocoDeMi} from './components/pages/UnPocoDeMi';
import {EstilosNail}from './components/pages/EstilosNail'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider} from './context/cartContext'
import { Cart } from './components/Cart/Cart';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <Encabezado></Encabezado>
      <NavBar></NavBar>
      <Routes>
        <Route path='/Productos'element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/'element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/productos/:catId' element={<ItemListContainer/>}></Route>
        <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element= {<Cart/>}></Route>
        <Route path='/galeria'element={<Galeria></Galeria>}></Route>
        <Route path='/unPocoDeMi'element={<UnPocoDeMi></UnPocoDeMi>}></Route>
        <Route path='/estilosNail'element={<EstilosNail></EstilosNail>}></Route>
        <Route path='/contacto'element={<Contacto></Contacto>}></Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
