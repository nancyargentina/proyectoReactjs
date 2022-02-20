import {BsFillCartFill} from "react-icons/bs";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export const CartWidget =()=>{
    const {cart, cantidadCart} = useContext(cartContext)
    return(
        <div style={{visibility: cart.length > 0 ? 'visible': 'hidden'}} >
        <Link to="/cart">
            <IconContext.Provider value={{ color: "purple", size:"30px" }}>
                <BsFillCartFill/>               
                <span className="badge top-0 start-100 translate-middle bg-secondary border border-light">{ cantidadCart()}</span>
            </IconContext.Provider>
        </Link>
        </div>
    )
}