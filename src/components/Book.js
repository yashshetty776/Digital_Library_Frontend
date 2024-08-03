// Book.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Book = ({ id, title, author, onAdd, onRemove, isOnWishlist }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>By {author}</Card.Text>
        {isOnWishlist ? (
          <Button variant="danger" onClick={() => onRemove(id)}>
            Remove from Wishlist
          </Button>
        ) : (
          <Button variant="primary" onClick={() => onAdd(id)}>
            Add to Wishlist
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Book;
