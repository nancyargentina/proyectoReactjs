import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {SinProds} from '../noProd/SinProds'
import { CartList } from "../CartList/CartList"

export const Cart = ()=>{
    const {cart, cantidadCart, totalCart,clear}= useContext(cartContext)
    
    return(
    <div className="container margin-boton">
        <h2>Tu carrito de compras</h2>
        <hr/>
        {cart.length === 0
            ? <SinProds/>
            :<CartList/>
         }       
    </div>
    )
}