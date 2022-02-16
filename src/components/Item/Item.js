import { Link } from "react-router-dom"
export const Item = ( {id,nombre,desc, img, precio} )=>{
    return(
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={img} alt={nombre}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <Link to={`/detalle/${id}`}>
                    <button className="btn btn-primary">Ver detalles</button>
                </Link>
            </div>
        </div>
    )
}