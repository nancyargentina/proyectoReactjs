import { useState, useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {ItemCount} from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail= ({id,nombre, descripcion, img, precio,stock,categoria})=>{
    const [cantidad, setCantidad]= useState(0)
    const {addItem, isInCart} = useContext(cartContext)
    
    const handleAgregar=()=>{
       // if (cantidad===0) return
       if (cantidad>0){
           const unItem= { id,nombre, precio,stock }
       
           addItem(unItem, cantidad)}
    }
  
    return (
        <div style={{width:"50rem",display:"flex",justifyContent:"center" }}>
            <img src={img} alt={nombre} style={{maxWidth:"500px"}}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text">Stock: {stock}</p>
                <p className="card-text">Categoría: {categoria}</p>
                
                {   isInCart(id) ?
                        <Link to="/cart"><button className="btn btn-primary">Terminar mi compra</button></Link>
                    :   
                    <>
                        <ItemCount max={stock}min={0} counter={cantidad} setCounter={setCantidad}/>

                        <button className="btn btn-primary" onClick={handleAgregar}>Comprar</button>
                    </>
                }
            </div>
            <Link to="/">
				<button className="btn btn-success m-1">Volver</button>
			</Link>
        </div>
    )
}