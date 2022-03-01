export const OrdenProduct=({nombre,precio,cant})=>{
    return(
    <tr>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td>{cant}</td>
    </tr>
    )
}