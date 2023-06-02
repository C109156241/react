import React from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';
import image from '../img/書圖/n1.jpg';
import image1 from '../img/書圖/n2.jpg';
import '../index.css';
const BookPage = () => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 19.99, image: image },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 24.99, image: image1 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 24.99, image: image1 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 24.99, image: image1 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 24.99, image: image1 },
  ];

  return (
    <Container style={{ width: '70%' }}>
      <Grid columns={5} doubling stackable>
        {books.map(book => (
          <Grid.Column key={book.id}>
            <Card>
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: `url(${book.image}) center/contain no-repeat`,
                }}
              />
              <Card.Content style={{ textAlign: 'center' }}>
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>{book.author}</Card.Meta>
              </Card.Content>
              <Card.Content extra style={{ textAlign: 'center' }}>
                <div style={{ width: '100%' }}>
                  <span style={{ display: 'block' }}>Price: ${book.price}</span>
                </div>
                <div style={{ width: '100%' }}>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
  
  
};

export default BookPage;
