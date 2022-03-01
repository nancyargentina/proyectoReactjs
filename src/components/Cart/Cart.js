import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {SinProds} from '../noProd/SinProds'
import { CartList } from "../CartList/CartList"

export const Cart = ()=>{
    const {cart}= useContext(cartContext)
    
    return(
    <div className="main container col-9 mx-auto">
        <h2 className="text-center">Tu carrito de compras</h2>
        <hr/>
        {cart.length === 0
            ? <SinProds/>
            :<CartList/>
         }       
    </div>
    )
}