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
import {cartContext} from './context/cartContext'
import { useState } from 'react';

function App() {

  const [cart, setCart]= useState([])

  const isInCart=(unId)=>{
    return cart.some( (item)=>item.prod.id===unId )  
  }
  const addItem= ( prod, cant ) => {
      !isInCart(prod.id)&& setCart( [...cart,{'prod':prod,cant}] ) //agrego  
  
  }
  const clear =()=>{
    //remover todos los productos del carrito
  }
  const removeItem=(itemId)=>{
    //remover el item específico cel carrito
  }

  

  return (
    <cartContext.Provider value={ {cart,addItem, isInCart} }>
      <BrowserRouter>
      <Encabezado></Encabezado>
      <NavBar></NavBar>
      <Routes>
        <Route path='/Productos'element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/'element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/productos/:catId' element={<ItemListContainer/>}></Route>
        <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}></Route>
        <Route path='/galeria'element={<Galeria></Galeria>}></Route>
        <Route path='/unPocoDeMi'element={<UnPocoDeMi></UnPocoDeMi>}></Route>
        <Route path='/estilosNail'element={<EstilosNail></EstilosNail>}></Route>
        <Route path='/contacto'element={<Contacto></Contacto>}></Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes> 
    </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
