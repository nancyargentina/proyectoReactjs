import './Item.css'
import { Link } from "react-router-dom"
export const Item = ( {id,nombre,desc, img, precio} )=>{
    return(
        <div className=" col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
            <div className="card">
                <div className="imagen">
                    <img className="card-img-top imagen" src={img} alt={nombre}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Precio: ${precio}</p>
                    <Link to={`/detalle/${id}`}>
                        <button className="btn btn-primary">Ver detalles</button>
                    </Link>
                </div>
            </div>
        </div>
        )
}