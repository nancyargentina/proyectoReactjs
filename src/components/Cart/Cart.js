import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { CartProduct } from "../CartProduct/CartProduct"


export const Cart = ()=>{
    const {cart, cantidadCart, totalCart}= useContext(cartContext)
    
    return(
    <>
        <h2>Carrito</h2>
        <hr/>
        <section className="">
            <table className="table table-striped" >
                <thead>
                    <th colspan="4">Carrito</th>
                </thead>
                <tr className="table-active">
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>cantidad</th>
                    <th>Subtotal</th>
                    </tr>   
                              
        {cart.map( (ele)=> <CartProduct key={ele.producto.id} nombre={ele.producto.nombre} precio={ele.producto.precio} cantidad={ele.cant} subTotal={ele.producto.precio * ele.cant} />)}
             
            </table>
        </section>
        <p>Cantidad de Items: {cantidadCart()}</p>
        <p>Precio Total: ${totalCart()}</p>
    </>
    )
}