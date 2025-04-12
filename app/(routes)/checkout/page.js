"use client";
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    calculateTotal(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    calculateTotal(cart);
  }, [cart]);

  // Add item to cart
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeItemFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Calculate total price
  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  };

  // Simulate checkout API call
  const checkout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart }),
      });
      if (response.ok) {
        alert('Checkout successful!');
        setCart([]); // Clear cart after successful checkout
      } else {
        alert('Checkout failed.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addItemToCart({ name: 'Sample Item', price: 10.99 })
        }
      >
        Add Sample Item
      </button>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
