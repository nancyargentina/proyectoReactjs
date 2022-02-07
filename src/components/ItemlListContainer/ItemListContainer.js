import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/accesoADatos"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [cargando,setCargando]=useState(false)
    
    useEffect(()=>{
       pedirDatos()
        .then( (res)=>{
            setProductos(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            console.log('Fin de proceso')
        })    
    },[])

    return (
        <>
            <ItemList productos={productos}/>
        </>
    )
}