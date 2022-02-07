export const Item = ( {nombre, desc, img, precio} )=>{
    return(
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={img} alt={nombre}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text">Precio: ${precio}</p>
                <button className="btn btn-primary">Go Somewhere</button>
            </div>
        </div>
    )
}