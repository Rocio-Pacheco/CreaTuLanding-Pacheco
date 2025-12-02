import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
  console.log('item', prod.id);
  return (
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          ${prod.precio},00
        </Card.Text>
     
        <Link className='btn btn-dark' to={'/item/'+prod.id}>Ver Mas</Link>
      </Card.Body>
    </Card>
  )
}

export default Item