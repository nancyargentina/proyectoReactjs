import { Item } from "../Item/Item"

export const ItemList = ({productos})=>{
     return (
        <div className="row">
        {productos.map( (ele)=> <Item key={ele.id} {...ele} />)}
        
        </div>
    )
}