import React, { useState } from 'react';
import { Image, Button, Container } from 'semantic-ui-react';
import logo from '../img/logo.png'
const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1,
      image: logo,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      quantity: 2,
      image: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      quantity: 1,
      image: 'https://example.com/product3.jpg',
    },
  ]);

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    // 執行結帳的相關邏輯
    console.log('Checkout');
  };

  return (
    <Container textAlign='center'>
      <table className="ui celled table">
     
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                    <Image src={item.image} size="small" rounded />
                </div>
              </td>
              <td style={tablefont}>{item.name}</td>
              <td style={tablefont}>
                 <Button
                  basic
                  color='green'
                  icon='plus'
                  onClick={() => handleIncreaseQuantity(item.id)}
                />   
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <Button
                  basic
                  color='red'
                  icon='minus'
                  onClick={() => handleDecreaseQuantity(item.id)}
                />
              </td>
              <td style={tablefont}>
                
               
                <Button
                  basic
                  color='red'
                  icon='trash'
                  onClick={() => handleRemoveItem(item.id)}
                />
              </td>
              <td style={tablefont}>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right' }}>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <Button primary onClick={handleCheckout}>Checkout</Button>
      </div>
    </Container>
  );
};

const tablefont={
    textAlign: 'center',
    fontSize: '20px',
}

export default ShoppingCartPage;
