import { Link } from "react-router-dom"
import {BsHandIndexThumbFill} from "react-icons/bs";
import { IconContext } from "react-icons";
import './sinStock.css'

export const SinStock =({fueraDeStock})=>{
    return(
        <div className="sinProdContainer container mb-4.">
            {fueraDeStock.forEach((item) =>{ {console.log(item.producto.nombre)}
                    <p>No hay stock sufiente para {item.producto.nombre} </p>
                    })
            }
            <Link to="/cart" className="link">
                <div className="btn boton">
                    <p>Volver al carrito de compras</p>
                    <IconContext.Provider value={{ size:"5vh"  }}>
                        <BsHandIndexThumbFill/>
                    </IconContext.Provider>
                </div>
            </Link>
        </div>  
    )
}