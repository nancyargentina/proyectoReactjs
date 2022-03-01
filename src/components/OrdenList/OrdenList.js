import { OrdenProduct} from '../OrdenProduct/OrdenProduct'

export const OrdenList=({items})=>{
    return(<>
    <table>
    <tbody>
        <tr className="table-active">
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
        </tr>
        {items.map( (ele)=> <OrdenProduct key={ele.id} {...ele} />)} 
    </tbody>
    </table>  

 </>)
}