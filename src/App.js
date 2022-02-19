import Encabezado from './components/encabezado/Encabezado';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Contacto } from './components/pages/Contacto';
import {Galeria} from './components/pages/Galeria';
import {UnPocoDeMi} from './components/pages/UnPocoDeMi';
import {EstilosNail}from './components/pages/EstilosNail'
import { CartProvider} from './context/cartContext'
import {ItemListContainer} from './components/ItemlListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <Encabezado></Encabezado>
      <Routes>
        <Route exact path='galeria' element={<Galeria></Galeria>}/>
        <Route exact path='unPocoDeMi'element={<UnPocoDeMi></UnPocoDeMi>}/>
        <Route exact path='estilosNail'element={<EstilosNail></EstilosNail>}/>
        <Route exact path='contacto'element={<Contacto></Contacto>}/>   

        <Route exact path='/'element={<ItemListContainer/>}/>
        <Route exact path='/tienda'element={<ItemListContainer/>}>
            <Route path='/tienda:catId' element={<ItemListContainer/>}/></Route>
        <Route exact path='/cart' element= {<Cart/>}></Route>
        <Route exact path='/detalle/:itemId' element={<ItemDetailContainer/>}></Route> 
        
        <Route path="*" element={<ItemListContainer/>}/>   
      </Routes>
      </BrowserRouter>
      <Footer/>
    </CartProvider>
  );
}

export default App;
