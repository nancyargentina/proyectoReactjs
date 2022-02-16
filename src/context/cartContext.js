import { createContext, useState } from "react";

export const cartContext= createContext()

export const CartProvider=( {children} )=>{

    const [cart, setCart]= useState([])

    const isInCart=(unId)=>{
      return cart.some( (item)=>item.producto.id===unId )  
    }

    const addItem = ( prod, unidades ) => {
      //la consigna solicita guardar{item,cantidad}
      const item = {  
        producto: prod,
        cant: unidades
      }
      
      if ( !isInCart(prod.id) ){
        setCart( [...cart,item] )   
      }
    }
    const cantidadCart =()=>{

        return(
            cart.reduce( (acum,item) => acum + item.cant, 0 )
          
        )
    }
    const totalCart =()=>{
        return(
            cart.reduce( (suma, item)=> suma + (item.producto.precio * item.cant), 0)
        )
    }
    const clear =()=>{
      //remover todos los productos del carrito
    }
    const removeItem=(itemId)=>{
      //remover el item específico cel carrito
    }

  return (
      <cartContext.Provider value={ 
        {cart, addItem, isInCart, cantidadCart, totalCart}
      }>
        {children}
      </cartContext.Provider>  
      )
}