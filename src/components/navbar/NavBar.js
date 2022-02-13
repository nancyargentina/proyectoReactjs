import './navbar.css'
import {Link} from 'react-router-dom'
export const NavBar=()=>{
return(
<div className='barra'>
    <h1>Tienda</h1>
    <nav className = "menu_options">
        <Link to='/' className = "menu_options_links">Uñas postizas</Link>
        <Link to='/' className = "menu_options_links">Herramientas</Link>
        <Link to='/' className = "menu_options_links">Cuidado de uñas</Link>
        <Link to='/' className = "menu_options_links">Accesorios</Link>
    </nav>

</div>

)
}