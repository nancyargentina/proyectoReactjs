import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/accesoADatos"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [cargando,setCargando]=useState(false)
    
    useEffect(()=>{
        setCargando(true)
       pedirDatos()
        .then( (res)=>{
            setProductos(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setCargando(false)
        })    
    },[])

    return (
        <>
            {
                cargando ? <h2>Cargando</h2>: <ItemList productos={productos}/>
            }
            
        </>
    )
}