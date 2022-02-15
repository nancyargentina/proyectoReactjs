import {BsFillCartFill} from "react-icons/bs";
import { IconContext } from "react-icons";

export const CartWidget =()=>{
    return(
    <IconContext.Provider value={{ color: "blue" }}>
        <BsFillCartFill/>
    </IconContext.Provider>
    )
}