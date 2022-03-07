import {useEffect, useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { Loader } from "../Loader/Loader"
import {SinProds} from '../mensajes/SinProds'
import {db} from "../../data/config"
import {collection, getDocs, query,where} from "firebase/firestore"

export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    
    const [cargando,setCargando]=useState(false)
    let noHayProductos=false
    const {catId} = useParams()
    
    useEffect(()=>{
        setCargando(true)
        const snapCollection= collection(db,'Productos')
        const consulta=( catId
            ? query( snapCollection, where('categoria','==',catId) ) 
            : snapCollection)
        getDocs(consulta)
        .then(    
            (snapProductos) =>{ 
                // "de cada objeto del array saco el objeto producto y armo un nuevo array Productos
                setProductos (snapProductos.docs.map( (documento) => ({id:documento.id, ...documento.data() })))
            }
             
        )
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