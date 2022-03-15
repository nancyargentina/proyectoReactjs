import Encabezado from './components/encabezado/Encabezado';
import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Contacto } from './components/pages/Contacto';
import {Galeria} from './components/pages/Galeria';
import {UnPocoDeMi} from './components/pages/UnPocoDeMi';
import {EstilosNail}from './components/pages/EstilosNail'
import { CartProvider } from './context/cartContext'
import {ItemListContainer} from './components/ItemlListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'
import Footer from './components/Footer/Footer';
import{NavBar} from './components/navbar/NavBar'
import { Checkout } from './components/Checkout/Checkout';

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

        {/* rutas con MAin apuntando a NavBar(Todo es hijo de) */}
        <Route exact path='/'element={<NavBar/>}>
          <Route index element={<ItemListContainer/>}/>
          <Route path='/tienda'element={<ItemListContainer/>}>
            <Route path='/tienda:catId' element={<ItemListContainer/>}/>
          </Route>
          <Route  path='/detalle/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element= {<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}/>
         </Route>
         <Route path="*" element={<Navigate to='/'/>}/> 
      </Routes>
      </BrowserRouter>
      <Footer/>
    </CartProvider>
  );
}

export default App;
