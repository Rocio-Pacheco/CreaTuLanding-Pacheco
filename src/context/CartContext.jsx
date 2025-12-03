import {createContext, useState } from "react";

//crear contexto y se exporta para usarlo en otros lados
export const CartContext = createContext()

//crear proovedor
export const CartProvider = ({children})=>{
    //muestra el estado del carrito y la función para actualizarlo
    const [cart, setCart] = useState([])

    //funiones que modifiquen el carrito

    return(
        <CartContext.Provider value={{cart}}>
            {/*Representa los componentes hijos que van a consumir el contexto.Todo lo que esté dentro de este Provider tendrá acceso al value.*/}
            {children}  
        </CartContext.Provider>
    );
}
