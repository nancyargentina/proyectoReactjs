import { Link } from "react-router-dom"

export const OrdenCompra=( {ordenId} )=>{ 

    return( <>
        <div className="container">
            <h2>Gracias por tu compra</h2>
            <hr/>
            <h4>Orden número: {ordenId}</h4>

            <Link to="/" className="btn btn-primary indigo my-2">Volver al inicio</Link>
        </div>                 
    </>)
           
} 