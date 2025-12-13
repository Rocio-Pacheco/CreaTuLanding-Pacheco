import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import Cartview from './CartView'
//contenedor del carrito
const CartContainer = () => {
  const{cart}= useContext (CartContext)

  return (
    <>{
      /* Si el carrito esta vacio, mostrar componente carrito vacio, sino mostrar vista del carrito */
      !cart.length
      ? <EmptyCart/>
      : <CartView/>
    }

    </>
  )
}

export default CartContainer