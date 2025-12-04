import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

//vista del carrito
const CartView = () => {
  const {cart, removeItem, clear, total}= useContext(CartContext)

  return (
    <div>
        <h1>Tu carrito 🛒</h1>
        <div>
            {
              cart.map((compra)=>(
                  <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}} >
                    <img src={compra.img} alt={compra.nombre} style={{width:'9rem'}}/>
                    <span>{compra.nombre}</span>
                    <span>${compra.precio},00</span>
                    <span>cantidad: {compra.quantity}</span>
                    <span>precio final: ${compra.quantity * compra.precio},00</span>
                    <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                  </div>
                ))
            }
          </div>
        </div>
  )
}

export default CartView