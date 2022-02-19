import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/accesoADatos"
import { ItemList } from "../ItemList/ItemList"
import {NavBar} from "../navbar/NavBar"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [cargando,setCargando]=useState(false)
    let noHayProductos=false
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
    productos.length===0 ? noHayProductos=true:noHayProductos=false
    

    return (
        <>  <NavBar/> 
            <div className="main">
                {        
                    cargando ? <h2>Cargando</h2>: (noHayProductos? <h2>No hay productos</h2>: <ItemList productos={productos}/>)
                }
            </div>
        </>
    )
}