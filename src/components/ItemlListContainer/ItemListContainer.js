import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/accesoADatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [cargando,setCargando]=useState(false)
    
    const {catId} = useParams()

    useEffect(()=>{
        setCargando(true)
       pedirDatos()
        .then( (res)=>{
            if(catId){
                setProductos(
                    res.filter( (ele)=>ele.categoria=== catId)
                    )
            } else {
                setProductos(res)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setCargando(false)
        })    
    },[catId])

    return (
        <>
            {
                cargando ? <h2>Cargando</h2>: <ItemList productos={productos}/>
            }
            
        </>
    )
}