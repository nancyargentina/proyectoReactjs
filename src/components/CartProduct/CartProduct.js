
export const CartProduct=({id, nombre, precio, cantidad, subTotal} )=>{
    return (
            <tr><td>{nombre}</td>
                <td>$ {precio}</td>
                <td>{cantidad}</td>
                <td>$ {subTotal}</td>
            </tr>
    )
}