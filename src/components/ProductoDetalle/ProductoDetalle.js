export const ProductoDetalle= ({id,nombre, descripcion, img, precio,stock,categoria})=>{
    return (
        <div style={{width:"50rem",display:"flex",justifyContent:"center" }}>
            <img src={img} alt={nombre} style={{maxWidth:"500px"}}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text">Stock: {stock}</p>
                <p className="card-text">Categoría: {categoria}</p>
                {/*<Link to={`/detalle/${id}`}>*/}
                    <button className="btn btn-primary">Comprar</button>
               {/*</Link> */} 
            </div>
        </div>
    )
}