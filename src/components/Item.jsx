import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Item = ({prod}) => {
  return (
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          ${prod.precio},00
        </Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  )
}

export default Item