import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { FcFullTrash } from "react-icons/fc";

export const CartProduct=({ id, nombre, precio, cantidad, subTotal} )=>{
    const { removeItem } = useContext(cartContext)
    return (
            <tr><td>{nombre}</td>
                <td>$ {precio}</td>
                <td>{cantidad}</td>
                <td>$ {subTotal}</td>
                <td><button onClick={ ()=>removeItem(id) } className="btn btn-primary btn-sm"><FcFullTrash /></button></td>
            </tr>
    )
}