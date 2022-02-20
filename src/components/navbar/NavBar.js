import './navbar.css'
import {Link, Outlet} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar=()=>{

    

return(<>
<div className='barra'>
    <Link to="/tienda" className='link '><h2>Tienda</h2></Link>
    <nav className = "menu_options">
        <Link to='/tienda/postizas' className = "link menu_options_links">Uñas postizas</Link>
        <Link to='/tienda/herramientas' className = "link menu_options_links">Herramientas</Link>
        <Link to='/tienda/nailcare' className = "link menu_options_links">Cuidado de uñas</Link>
        <Link to='/tienda/accesorios' className = "link menu_options_links">Accesorios</Link>
        
    </nav>
    <CartWidget/>
</div>
<Outlet/>
</>

)
}