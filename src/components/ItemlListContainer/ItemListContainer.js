import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/accesoADatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { Loader } from "../Loader/Loader"
import {SinProds} from '../noProd/SinProds'
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
        <>  
            <div className="main">               
                { cargando ?      
                    <Loader /> //Cartel mientras se recuperan 
                    : noHayProductos ? <SinProds/>  //CArtel Si no existen coincidencias del filtro
                    : <ItemList productos={productos}/>
                }
            </div>
        </>
    )
}