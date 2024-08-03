// Wishlist.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Book from './Book';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Function to add a book to the wishlist
  const addToWishlist = (id) => {
    const bookToAdd = {
      id,
      title: `Book ${id}`,
      author: 'Author',
    };
    setWishlist([...wishlist, bookToAdd]);
  };

  // Function to remove a book from the wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((book) => book.id !== id);
    setWishlist(updatedWishlist);
  };

  // Function to check if a book is in the wishlist
  const isBookInWishlist = (id) => {
    return wishlist.some((book) => book.id === id);
  };

  // Sample list of books (you can replace with your actual data or API call)
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird',author: 'Harper Lee' },
    { id: 3, title: '1984',author: 'George Orwell'},
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];

  return (
    <Container>
      <header className="text-center mt-4 mb-4">
        <h1>LIST YOUR BOOKS</h1>
      </header>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4}>
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              onAdd={addToWishlist}
              onRemove={removeFromWishlist}
              isOnWishlist={isBookInWishlist(book.id)}
            />
          </Col>
        ))}
      </Row>
      {wishlist.length > 0 && (
        <div className="mt-4">
          <h2>BOOKS IN WISHLIST:</h2>
          <ul>
            {wishlist.map((book) => (
              <li key={book.id}>{`${book.title} by ${book.author}`}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default Wishlist;
