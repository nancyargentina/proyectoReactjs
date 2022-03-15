import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {db} from "../../data/config"
import {doc, getDoc} from "firebase/firestore"
import { Loader} from '../Loader/Loader'

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
            .finally(()=>{setCargando(false)})

    },[])
    return (
        
        <div className="main">
        {
            cargando ?  <Loader />: <ItemDetail {...producto}/>
        }
        </div>
    )
}
