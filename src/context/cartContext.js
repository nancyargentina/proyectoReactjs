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
      //precio total de todos los productos * cantidad
        return(
            cart.reduce( (suma, item)=> suma + (item.producto.precio * item.cant), 0)
        )
    }
    const clear =()=>{
      //elimina todos los items
      setCart([])
    }
    const removeItem=(id)=>{
      //remover el item específico del carrito
      setCart( cart.filter( (item)=>item.producto.id!==id ) )
    }

  return (
      <cartContext.Provider value={ 
        {cart, addItem, isInCart, cantidadCart, totalCart,clear,removeItem}
      }>
        {children}
      </cartContext.Provider>  
      )
}