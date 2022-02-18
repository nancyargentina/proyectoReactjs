import './navbar.css'
import {Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar=()=>{
return(
<div className='barra'>
    <h1><Link to="/tienda">Tienda</Link></h1>
    <nav className = "menu_options">
        <Link to='/tienda/postizas' className = "menu_options_links">Uñas postizas</Link>
        <Link to='/tienda/herramientas' className = "menu_options_links">Herramientas</Link>
        <Link to='/tienda/nailcare' className = "menu_options_links">Cuidado de uñas</Link>
        <Link to='/tienda/accesorios' className = "menu_options_links">Accesorios</Link>
        
    </nav>
    <CartWidget/>

</div>

)
}