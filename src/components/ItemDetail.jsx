import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({detalle}) => {
  const { cart, addItem, itemQuantity } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detalle,cantidad);
    setPurchase(true);
    addItem(detalle, cantidad);
    // Alerta de agregado al carrito
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste  ${detalle.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1500
    })
  }

  const stockActualizado = detalle.stock - itemQuantity(detalle.id)

   return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}}>
        <h1>Detalle de: {detalle.nombre}</h1>
        <img src={detalle.img} alt={detalle.nombre}/>
        <p>{detalle.descripcion}</p>
        <p>${detalle.precio},00</p>
        <p>STOCK DISPONIBLE: {stockActualizado}</p>
        {purchase ? <Link className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail