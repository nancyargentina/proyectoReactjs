import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatosporId } from "../../helpers/accesoADatos"
import {ProductoDetalle} from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () =>{
    
    const [producto,setProducto]= useState(null)
    const [cargando,setCargando]=useState(false)

    const { itemId }= useParams()

    useEffect(()=>{
        setCargando(true)
        pedirDatosporId(itemId)
            .then((res)=>{
                setProducto( res )
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
