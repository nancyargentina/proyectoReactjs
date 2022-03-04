import { createContext, useState } from "react";

export const ordenContext= createContext()

export const OrdenProvider = ( {children} ) =>{
    
    const [ordenId, setOrdenId]=useState(null)
    const addOrdenId=(valor)=>{
        setOrdenId(valor)
    }
    const clearOrderId=(valor)=>{
        setOrdenId(null)
    }

    return(
        <ordenContext.Provider value={ 
            {ordenId, addOrdenId, clearOrderId}
        }>
            {children}
        </ordenContext.Provider>  
    )
}