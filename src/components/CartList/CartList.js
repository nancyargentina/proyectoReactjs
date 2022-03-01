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
                    <th className="text-center">Precio Unitario</th>
                    <th className="text-center">cantidad</th>
                    <th className="text-center">Subtotal</th>
                    <th></th>
                    </tr>   
                              
        {cart.map( (ele)=> <CartProduct key={ele.producto.id} {...ele.producto} cantidad={ele.cant} subTotal={precioItems(ele)}/>)}
        </tbody>
            </table>
        </section>
        <div className="hstack">
            <p>Cantidad de Items: {cantidadCart()}</p>
            <p className="ms-auto">Precio Total: ${totalCart()}</p>
        </div>
        <div className="hstack">
            <button onClick={clear} className="btn btn-primary indigo">Vaciar Carrito</button>
            <Link to="/" className="btn btn-primary mx-3 indigo">Seguir comprando</Link> 
		    <Link to="/checkout" className="btn btn-success mx-3 indigo ms-auto">Finalizar compra</Link>
        </div>
        </>
    )
}