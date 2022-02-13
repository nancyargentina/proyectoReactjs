import { stock } from "../components/data/stock"
export const pedirDatos = () =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000)
    })
}