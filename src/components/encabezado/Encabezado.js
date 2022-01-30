import './encabezado.css';

const Encabezado = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark">  
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a className="menu__item__link" href="./index.html"><img className="logo" src="./images/logo.png" alt="Logo"/></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu">Menú</span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end"id="navbarNav">
                        <ul className="navbar-nav menu text-end">
                          <li className="nav-item"><a className="menu__item__link" href="./index.html">Inicio</a> |</li>
                          <li className="nav-item"><a className="menu__item__link" href="estilosNail.html">Estilos</a> |</li>
                          <li className="nav-item"><a className="menu__item__link" href="galeria.html">Galería</a> |</li>
                          <li className="nav-item"><a className="menu__item__link" href="unPocoDeMi.html">Un poco de mí</a> |</li>
                          <li className="nav-item"><a className="menu__item__link" href="contacto.html">Contacto</a> </li>
                        </ul>
                   </div>
                </div>   
            </nav>
        </header>
    )
}
export default Encabezado;