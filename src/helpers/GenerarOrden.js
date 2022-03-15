import {collection, addDoc, Timestamp, writeBatch, documentId, getDocs, query, where } from "firebase/firestore"
import { db } from '../data/config'

import Swal from "sweetalert2"

//funcion que crea la orden y almacena en database
export  const generarOrden= async(values, cart, totalCart, clear)=>{

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
                Swal.fire('Gracias por tu compra',`Orden número: ${ordenCreada.id}`,'success')
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(clear() )
    }
    else {
        //si faltan stock muestro los faltantes
        alert ("Hay productos faltantes")          
    }
    
}