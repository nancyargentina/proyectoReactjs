import { useContext } from "react"
import { Navigate, Link } from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"


export const Checkout=()=>{

    const {cart}= useContext(cartContext)

    return(
        <>{ 
            cart.length === 0
                ? <Navigate to="/"/>
                :<CheckoutForm/>  
        }</>
    )
}