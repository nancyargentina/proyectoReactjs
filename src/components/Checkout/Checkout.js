import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import {ordenContext} from '../../context/ordenContext'
import { MensajeOKCompra } from "../mensajes/MensajeOKCompra"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"


export const Checkout=()=>{

    const {cart}= useContext(cartContext)
    const {ordenId,clearOrderId}= useContext(ordenContext)
    

    return(
        <>{ ordenId ? <MensajeOKCompra ordenId={ordenId} clearOrderId={clearOrderId}/>
            :
             (cart.length === 0
                ? <Navigate to="/"/>
                :<CheckoutForm/>
            )
        }</>
    )
}