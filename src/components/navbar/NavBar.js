import './navbar.css'
import {Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar=()=>{
return(
<div className='barra'>
    <h1><Link to="/products">Tienda</Link></h1>
    <nav className = "menu_options">
        <Link to='/productos/postizas' className = "menu_options_links">Uñas postizas</Link>
        <Link to='/productos/herramientas' className = "menu_options_links">Herramientas</Link>
        <Link to='/productos/nailcare' className = "menu_options_links">Cuidado de uñas</Link>
        <Link to='/productos/accesorios' className = "menu_options_links">Accesorios</Link>
        
    </nav>
    <CartWidget/>

</div>

)
}