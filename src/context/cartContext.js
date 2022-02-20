import { createContext, useState } from "react";

export const cartContext= createContext()

export const CartProvider = ( {children} ) =>{
    //cart: arreglo de {item,cantidad} agregados al carrito
    const [cart, setCart]= useState([])

    //función que retorna true si existe item con unId en el carrito
    const isInCart=(unId)=>{
      return cart.some( (item)=>item.producto.id===unId )  
    }
    
    //funcion para agregar item al carrito si no existe
    const addItem = ( prod, unidades ) => {
      //la consigna solicita guardar{item,cantidad}

      const cartTemporal=[...cart]
      const indiceItem= cartTemporal.findIndex((item)=>item.producto.id===prod.id)
      const item = {  
        producto: prod,
        cant: unidades
      }

      if ( !isInCart(prod.id) ){
        //si no existe en el carrito, agrego el item
        setCart( [...cart,item] )   
      }else{
        //si existe, evaluo si las unidades > stock
        (cartTemporal[indiceItem].cant + unidades) > cartTemporal[indiceItem].stock
          ? (cartTemporal[indiceItem].cant = cartTemporal[indiceItem].producto.stock)
          : (cartTemporal[indiceItem].cant)+= unidades
          setCart(cartTemporal)
      }
    }

    //función para sumar la cantidad total de items en el carrito
    const cantidadCart =()=>{
        return(
            cart.reduce( (acum,item) => acum + item.cant, 0 )
        )
    }

    //precio total de todos los productos del carritos
    const totalCart =()=>{
        return(
            cart.reduce( (suma, item)=> suma + (item.producto.precio * item.cant), 0)
        )
    }

    //elimina todos los items
    const clear =()=>{
      setCart([])
    }

     //remover un item específico del carrito
    const removeItem=(id)=>{
      setCart( cart.filter( (item)=>item.producto.id!==id ) )
    }

    //precio de todos los items iguales del carrito
    const precioItems=(item)=>{
      return( item.producto.precio * item.cant)
    }

  return (
      <cartContext.Provider value={ 
        {cart, addItem, isInCart, cantidadCart, totalCart,clear,removeItem,precioItems}
      }>
        {children}
      </cartContext.Provider>  
      )
}