import { Link } from "react-router-dom"
import {BsHandIndexThumbFill} from "react-icons/bs";
import { IconContext } from "react-icons";
import './SinProds.css'

export const SinProds =()=>{
    return(
        <div className="sinProdContainer container mb-4.">
            <p>No se encuentran productos.</p>
            <Link className="link" to="/tienda">
                <div className="btn boton">
                <p>Sigue explorando la tienda</p>
                <IconContext.Provider value={{ size:"5vh"  }}>
                    <BsHandIndexThumbFill/>
                </IconContext.Provider>
                </div>
            </Link>
        </div>  
    )
}