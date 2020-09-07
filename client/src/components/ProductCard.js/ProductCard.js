import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './productCard.scss';

function ProductCard({ product, addProductToCart }) {
  const { title, price, imgUrl } = product;
  return (
    <Card>
      <Card.Img height="250px" variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="card_description ">
          <Card.Text style={{ color: 'rgba(202, 45, 45, 0.8)' }}>
            {price}$
          </Card.Text>
          {/* <Card.Text>
            In stock: {product.inventory}
          </Card.Text> */}
          <Button
            className="btn btn-primary"
            onClick={() => addProductToCart(product)}
          // variant="outline-primary"
          >
            Add to Cart
             </Button>
        </div>
      </Card.Body>
      {/* <Card.Footer>
        In stock on <Moment format="DD/MM/YYYY">{moment.utc(product.date)}</Moment>
      </Card.Footer> */}
    </Card>
  );
}

export default ProductCard;