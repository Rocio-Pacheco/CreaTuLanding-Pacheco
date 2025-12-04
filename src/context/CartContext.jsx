import {createContext, useState } from "react";

//crear contexto y se exporta para usarlo en otros lados
export const CartContext = createContext()
//crear proovedor
export const CartProvider = ({children})=>{
    //muestra el estado del carrito y la función para actualizarlo
    const [cart, setCart] = useState([])
    //funiones que modifiquen el carrito
    //Agregar item
    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod) => {
                if(prod.id === item.id){
                    //actualiza
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //todos los que restan, sin modificar
                    return prod
                }
            }))
        }else{
            setCart([...cart, {...item, quantity: qty}])
        }
    }

    // Remover item, no cantidad
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    // Vaciar carrito
    const clear = () => {
        setCart([])
    }
    //Devuelve un bool si ese item existe o no en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //Muestra el proveedor del contexto
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {/*Representa los componentes hijos que van a consumir el contexto.Todo lo que esté dentro de este Provider tendrá acceso al value.*/}
            {children}  
        </CartContext.Provider>
    );
}
