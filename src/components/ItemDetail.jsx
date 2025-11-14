import React from 'react'
import Item from './Item'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        {data.map((detail) => <Item key={detail.id} detail={detail}/>)}     
    </div>
  )
}

export default ItemDetail