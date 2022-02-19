import './encabezado.css';
import { Link } from 'react-router-dom';
const Encabezado = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark">  
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link className="menu__item__link" to="/"><img className="logo" src="/images/logo.png" alt="Logo"/></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu">Menú</span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end"id="navbarNav">
                        <ul className="navbar-nav menu text-end">
                          <li className="nav-item"><Link className="menu__item__link" to="/">Inicio</Link> |</li>
                          <li className="nav-item"><Link className="menu__item__link" to="/estilosNail">Estilos</Link> |</li>
                          <li className="nav-item"><Link className="menu__item__link" to="/galeria">Galería</Link> |</li>
                          <li className="nav-item"><Link className="menu__item__link" to="/unPocoDeMi">Un poco de mí</Link> |</li>
                          <li className="nav-item"><Link className="menu__item__link" to="/Tienda">Tienda</Link> |</li>
                          <li className="nav-item"><Link className="menu__item__link" to="/contacto">Contacto</Link> </li>
                        </ul>
                   </div>
                </div>   
            </nav>
        </header>
    )
}
export default Encabezado;