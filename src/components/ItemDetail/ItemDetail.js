import './ItemDetail.css';
import '../../vendor/animate.css'
import { useState, useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {ItemCount} from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import {BsCartPlus} from "react-icons/bs";

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
        <div className="container dark-grey-text mt-5">
            <div className="row fade-up">
                <div className="col-md-6 mb-4">
                    <img className="img-fluid" src={img} alt={nombre} style={{maxWidth:"500px"}}/>
                </div>
                <div className="col-md-6 mb-4">
                    <div className=" portfolio-info p-4">
                        <div className="mb-3">
                            <Link to={`/tienda/${categoria}`}><span className="badge rounded-pill purple">{categoria}</span></Link>
                        </div>
                        <p className="lead"><span>$100</span></p>
                        <p className="lead font-weight-bold">{nombre}</p>
                        <p>{descripcion}</p>
                        {   isInCart(id) ?
                            <Link to="/cart"><button className="btn btn-success indigo">Terminar mi compra</button></Link>
                        :   
                        <>
                            <ItemCount max={stock}min={0} counter={cantidad} setCounter={setCantidad}/>
                            <button className="btn btn-success indigo my-2" onClick={handleAgregar} >Comprar <BsCartPlus/></button>
                        </>
                        }
                    </div>
                    <div className='text-center'><Link to="/"><button className="btn btn-primary m-1 indigo">Volver</button></Link></div>
                    
                </div>
            </div>
        </div>
    )
}