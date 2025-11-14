
import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
      <h1>Error: No se encuentra la ruta</h1>
      <Link className="btn btn-dark" to='/'>Volver</Link>
    </div>
  )
}

export default Error
