import '../../vendor/animate.css'
import { Item } from "../Item/Item"

export const ItemList = ({productos})=>{
     return (
        <section className="container text-center mb-4.">
            <div className="row wow fadeIn">
            {productos.map( (ele)=> <Item key={ele.id} {...ele} />)}
            </div>
        </section>
    )
}