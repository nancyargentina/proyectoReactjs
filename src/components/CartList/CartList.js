import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { CartProduct } from "../CartProduct/CartProduct"
import { Link } from "react-router-dom"

export const CartList=()=>{
    const {cart, cantidadCart, totalCart,clear,precioItems}=useContext(cartContext)

    return(<>
        <section className="">
            <table className="table table-striped" >
                <tr className="table-active">
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>cantidad</th>
                    <th>Subtotal</th>
                    </tr>   
                              
        {cart.map( (ele)=> <CartProduct key={ele.producto.id} {...ele.producto} cantidad={ele.cant} subTotal={precioItems(ele)}/>)}
             
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