import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { CartProduct } from "../CartProduct/CartProduct"
import { Link } from "react-router-dom"


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
        <Link to="/"><button className="btn btn-primary mx-3">Seguir comprando</button>
        </Link>
		<button //onClick={() => { setShowForm(true) }}
        className="btn btn-success mx-3">Finalizar compra</button>
    </>
    )
}