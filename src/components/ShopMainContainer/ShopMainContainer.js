import { ItemListContainer } from "../ItemlListContainer/ItemListContainer"
import { Routes,Route } from "react-router-dom"

export const ShopMainContainer =()=>{
    return(
        <>
            
           <Routes>
                <Route path='/' element={<ItemListContainer/>}/>

           </Routes>
            
        </>
    )
}