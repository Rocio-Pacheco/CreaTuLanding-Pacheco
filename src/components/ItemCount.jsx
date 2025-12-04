import React from 'react'

 const ItemCount=({stock, onAdd})=> {
   // Crea el estado 'count' (inicia en 1) y la función 'setCount' para actualizarlo.
  const [count, setCount] = React.useState(0)
  const [compra, setCompra] = React.useState (false)

  const sumar = () => {
    if (count < stock ){
      setCount(count + 1)
    }
  }
  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    } 
  }

  const ejecutarCompra = () => {
    onAdd(count)
  }
  
  console.log('ItemCount')
    return (
      <> {
        stock > 0 
        ? <>
      <div>
        <button className='btn btn-danger' onClick={restar} disabled ={count === 0}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar} disabled ={count === stock}>+</button>
      </div>
      <button className='btn btn-primary mt-2' onClick={ejecutarCompra} disabled ={count === 0}>Comprar</button>
      </>
      : <p>No hay stock disponible por el momento</p>
      }
      </>
    )

}

export default ItemCount