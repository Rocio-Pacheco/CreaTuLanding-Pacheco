import React from 'react'

 const ItemCount=({stock})=> {
   // Crea el estado 'count' (inicia en 1) y la función 'setCount' para actualizarlo.

    const [count, setCount] = React.useState(0)

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

  return (
    <div><button className='btn btn-danger' onClick={restar} disabled ={count === 0}>-</button>
    <span className='btn'>{count}</span>
    <button className='btn btn-success' onClick={sumar} disabled ={count === stock}>+</button>
    </div>
  )
 }

export default ItemCount