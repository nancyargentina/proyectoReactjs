import { stock } from "../data/stock"

export const pedirDatos = () =>{
    
return new Promise( (resolve, reject)=>{
            setTimeout(()=>{
                resolve(stock)
            },2000)
        })
}

export const pedirDatosporId=(prodId)=>{
    return new Promise( (resolve,reject)=>{
           resolve( stock.find((ele)=> ele.id === Number(prodId)) ) 
    })
}


