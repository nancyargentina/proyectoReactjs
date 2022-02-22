import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
//import { pedirDatosporId } from "../../helpers/accesoADatos"
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {db} from "../../data/config"
import {doc, getDoc} from "firebase/firestore"

export const ItemDetailContainer = () =>{
    
    const [producto,setProducto]= useState(null)
    const [cargando,setCargando]=useState(false)

    const { itemId }= useParams()

    useEffect(()=>{
        setCargando(true)
        const snapProducto= doc(db,'Productos',itemId)
        getDoc(snapProducto)
            .then((doc)=>{
                setProducto({id:doc.id,...doc.data()})
            })
        /*pedirDatosporId(itemId)
            .then((res)=>{
                setProducto( res )
            })*/
            .finally(()=>{setCargando(false)})

    },[])
    return (
        <>
        {
            cargando ? <h2>Cargando...</h2>: <ItemDetail {...producto}/>
        }
        
    </>
    )
}
