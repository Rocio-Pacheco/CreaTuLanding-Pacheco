import React from 'react'
import { Link } from 'react-router-dom'

//carrito vacio
const EmptyCart = () => {
  return (
    <div>
        <h1>Tu carrito esta vacio! </h1>
        <h3>Mira todo lo que tenemos para ofrecerte</h3>
        <Link className="btn btn-dark" to='/'>Volver</Link>
    </div>
    
  )
}

export default EmptyCart