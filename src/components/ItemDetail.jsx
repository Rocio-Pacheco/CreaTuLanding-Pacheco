import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
  const { cart, addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(detalle,cantidad);
  }



  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}}>
      <h1>Detalle de: {detalle.nombre}</h1>
      <img src={detalle.img} alt={detalle.nombre}/>
      <p>{detalle.descripcion}</p>
      <p>${detalle.precio},00</p>
      <p>STOCK DISPONIBLE: {detalle.stock}</p>
      <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail