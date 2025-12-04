import {createContext, useState } from "react";

//crear contexto y se exporta para usarlo en otros lados
export const CartContext = createContext()

//crear proovedor
export const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([])

    //Agregar item
    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod) => {
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            }))
        }else{
            setCart([...cart, {...item, quantity: qty}])
        }
    }

    // Remover item
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    // Vaciar carrito
    const clear = () => {
        setCart([])
    }

    // Verificar si un producto existe
   const isInCart = (id) => cart.some(prod => prod.id === id)

    // Cantidad total de items (suma de quantity)
    const cartQuantity = () => cart.reduce((s, p) => s + (p.quantity || 0), 0)

    // Total $ del carrito (suma price * quantity)
    const total = () => cart.reduce((s, p) => s + ((p.quantity || 0) * (p.precio || p.price || 0)), 0)


    //  CANTIDAD DE UN ITEM POR ID
    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod) => prod.id === id)

        return itemInCart ? itemInCart.quantity : 0
    }

    // Proveedor
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear,isInCart, total, cartQuantity, itemQuantity}}>
            {children}  
        </CartContext.Provider>
    );
}
