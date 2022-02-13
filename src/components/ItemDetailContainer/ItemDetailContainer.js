import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/accesoADatos"
import {ProductoDetalle} from '../ProductoDetalle/ProductoDetalle'

export const ItemDetailContainer = () =>{
    
    const [producto,setProducto]= useState(null)
    const [cargando,setCargando]=useState(false)

    const { itemId }= useParams()

    useEffect(()=>{
        setCargando(true)
        pedirDatos()
            .then((res)=>{
                setProducto( res.find( (ele)=> ele.id === Number(itemId) ) )
            })
            .finally(()=>{setCargando(false)})

    },[])

    return (
        <>
        {
            cargando ? <h2>Cargando...</h2>: <ProductoDetalle {...producto}/>
        }
        
    </>
    )
}
