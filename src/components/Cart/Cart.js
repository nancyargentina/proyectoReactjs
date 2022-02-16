import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { CartProduct } from "../CartProduct/CartProduct"


export const Cart = ()=>{
    const {cart, cantidadCart, totalCart,clear}= useContext(cartContext)
    
    return(
    <>
        <h2>Tu carrito de compras</h2>
        <hr/>
        <section className="">
            <table className="table table-striped" >
                <thead>
                    <th colspan="5">Carrito</th>
                </thead>
                <tr className="table-active">
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>cantidad</th>
                    <th>Subtotal</th>
                    </tr>   
                              
        {cart.map( (ele)=> <CartProduct key={ele.producto.id} {...ele.producto} cantidad={ele.cant} subTotal={ele.producto.precio * ele.cant}/>)}
             
            </table>
        </section>
        <p>Cantidad de Items: {cantidadCart()}</p>
        <p>Precio Total: ${totalCart()}</p>
        <button onClick={clear} className="btn btn-primary">Vaciar Carrito</button>
    </>
    )
}