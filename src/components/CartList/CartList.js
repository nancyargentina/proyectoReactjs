import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { CartProduct } from "../CartProduct/CartProduct"
import { Link } from "react-router-dom"

export const CartList=()=>{
    const {cart, cantidadCart, totalCart,clear,precioItems}=useContext(cartContext)

    return(<>
        <section className="">
            <table className="table table-striped" >
                <tbody>
                <tr className="table-active">
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                    </tr>   
                              
        {cart.map( (ele)=> <CartProduct key={ele.producto.id} {...ele.producto} cantidad={ele.cant} subTotal={precioItems(ele)}/>)}
        </tbody>
            </table>
        </section>

        <p>Cantidad de Items: {cantidadCart()}</p>
        <p>Precio Total: ${totalCart()}</p>
        <button onClick={clear} className="btn btn-primary indigo">Vaciar Carrito</button>
        <Link to="/"><button className="btn btn-primary mx-3 indigo">Seguir comprando</button>
        </Link>
		<button //onClick={() => { setShowForm(true) }}
        className="btn btn-success mx-3 indigo">Finalizar compra</button>
        </>
    )
}