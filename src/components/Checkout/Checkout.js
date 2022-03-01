import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import {collection, addDoc, Timestamp, writeBatch, documentId, getDocs, query, where } from "firebase/firestore"
import { db } from "../../data/config"
import { OrdenCompra } from "../Orden/OrdenCompra"
import { SinStock } from "./sinStock"

export const Checkout=()=>{
    const {cart, totalCart,clear}= useContext(cartContext)
    
    const [ordenId, setOrdenId]=useState(null)
    //funcion que crea la orden y almacena en database
    const generarOrden= async()=>{
        //creo una orden
        const nuevaOrden= {
            comprador: values,
            items: cart.map((ele) => (
                {   id: ele.producto.id,
                    nombre: ele.producto.nombre,
                    precio: ele.producto.precio,
                    cant: ele.cant} )
            ),
            total: totalCart(),
            fecha: Timestamp.fromDate(new Date()),
        }
       
        const batch= writeBatch(db)
        const snapCollectionOrdenes= collection(db,"Ordenes")
        const snapCollectionProds =collection(db,"Productos")
        
        //los productos de la db cuyo ID esten en mi carrito
        const queryProductos =query(snapCollectionProds, where(documentId(),"in", cart.map(ele => ele.producto.id)))
        const productosDB= await getDocs(queryProductos)
        
        const fueraDeStock=[]
        //por cada producto de productosDB voy a revisar el stock disponible
        productosDB.docs.forEach( (prodDB)=>{
            
            //encuentro el item del carrito que coincida con prodDB
            const itemCar = cart.find(el=>el.producto.id===prodDB.id)

            // si hay stock suficiente preparo update, sino guardo en bandera
            if (prodDB.data().stock >= itemCar.cant){
                batch.update(prodDB.ref ,{stock: prodDB.data().stock - itemCar.cant})
            }
            else {
                fueraDeStock.push(itemCar)
            }
        })
        
        //no hay productos faltantes, guardo la orden y cambios en stocks
        if (fueraDeStock.length===0){
            addDoc(snapCollectionOrdenes,nuevaOrden)
                .then( (ordenCreada)=>{
                    batch.commit()
                    setOrdenId(ordenCreada.id)
                    clear()
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
        else {
            //si faltan stock muestro los faltantes
            return (
            <>{fueraDeStock.forEach((item) =>{
                <p>No hay stock sufiente para {item.producto.nombre} </p>
                })
            }
            <Link to="/cart" className="btn btn-primary indigo">Volver al carrito de compras</Link>
            </>)
            
        }
        
    }

    //manejo del formulario
    const [values,setValues]=useState({nombre:'',tel:'',email:''})

    const handleInputChange= (e)=>{
        //manejo de ingreso de datos en los inputs
        setValues({ ...values, [e.target.name]:e.target.value })
    }

    const handleSubmit=(e)=>{
        //manejo de envío de datos del formulario
        e.preventDefault()
        if(values.nombre.length < 5){
            alert("El nombre es demasiado corto")
            return
        }
        if(values.tel.length < 7){
            alert("El tel es inválido")
            return
        }
        if(values.email.length < 7){
            alert("El email es inválido")
            return
        }
        generarOrden()
    }
    // fin manejo del formulario

    

    return(
        <>{ ordenId? <OrdenCompra ordenId={ordenId}/>
            :
             (cart.length === 0 ? <Navigate to="/"/>
                : (
                <div className="container mx-auto p-2">
                    <h3>Completa los datos para confirmar la compra</h3>
                    <hr/>
                    <form onSubmit={handleSubmit} className='col-6'>
                        <input className="form-control my-2" type= "text" placeholder="Aquí tu nombre" value={values.nombre} name="nombre" onChange={handleInputChange}/> 
                        <input className="form-control my-2" type= "tel" placeholder="Aquí tu telefono" value={values.tel} name="tel" onChange={handleInputChange}/>
                        <input className="form-control my-2" type= "email" placeholder="Aquí tu correo electrónico" value={values.email} name="email" onChange={handleInputChange}/>
                        <div className="hstack">
                        <Link to="/cart"className="btn btn-primary indigo">Volver</Link>
                        <button type="submit" className="btn btn-primary indigo ms-auto">Confirmar</button>
                        </div>
                    </form>
                </div>)
            )
        }</>
    )
}