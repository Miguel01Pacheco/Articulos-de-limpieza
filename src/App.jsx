import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const sendOrder = () => {
    const orderMessage = cart.map(item => `${item.nombre} - ${item.quantity} unidades`).join(', ');
    const whatsappUrl = `https://wa.me/542234389793?text=${encodeURIComponent(`Pedido: ${orderMessage}`)}`;
    window.open(whatsappUrl, '_blank');
    alert("Tu pedido fue enviado con éxito, en breve nos comunicaremos con vos!");
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} sendOrder={sendOrder} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
