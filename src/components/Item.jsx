import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Item.css';

const Item = ({ prod }) => {
  return (
    <Link className="item-link" to={`/item/${prod.id}`}>
      <Card className="item-card">
        <Card.Img
          className="card-img"
          variant="top"
          src={prod.img}
          alt={prod.nombre}
        />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            ${prod.precio},00
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
