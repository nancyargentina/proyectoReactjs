import { ItemListContainer } from "../ItemlListContainer/ItemListContainer"
import { NavBar } from "../navbar/NavBar"

import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { Cart } from "../Cart/Cart"
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