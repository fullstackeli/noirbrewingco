import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const products = [
    { name: "Blonde Roast Coffee", image: "/images/blonderoa.jpg", desc: "Rich & bold blend, 12oz", price: 14.99 },
    { name: "Light Roast Coffee", image: "/images/lightroa.jpg", desc: "Bright & smooth blend, 12oz", price: 12.99 },
    { name: "Medium Roast Coffee", image: "/images/mediumroast.jpg", desc: "Single-origin specialty, 12oz", price: 16.99 },
    { name: "Dark Roast Coffee", image: "/images/darkroa.jpg", desc: "Perfect for espresso lovers, 12oz", price: 15.99 },
    { name: "Noir Signature Coffee", image: "/images/noirroa.jpg", desc: "Bold, smooth, unforgettable, 12oz", price: 29.99 },
    { name: "Expresso Beans", image: "/images/expressoroa.jpg", desc: "An expresso ritual must have, 12oz", price: 24.99 },
    { name: "Organic Decaf", image: "/images/organicdecaf.jpg", desc: "Rich, intense, and 100% organic", price: 19.99 },
    { name: "Italian Press", image: "/images/italianpress.jpg", desc: "Smooth & naturally processed, 12oz", price: 13.99 },
    { name: "Mug", image: "/images/mug.jpg", desc: "Crafted for slow sips & cozy mornings.", price: 34.99 },
    { name: "Travel Tumbler", image: "/images/tumbler.jpg", desc: "Hot or iced, your brew stays just right.", price: 34.99 },
    { name: "Noir Candle", image: "/images/candle.jpg", desc: "The scent of fresh coffee, without the caffeine.", price: 34.99 },
    { name: "Coffee Grinder", image: "/images/coffeegrinder.jpg", desc: "Precision grinding for fresh coffee", price: 34.99 },
    { name: "Brew Stickers", image: "/images/sticker.jpg", desc: "Stick them anywhere, spread the love.", price: 34.99 },
    { name: "Table Coaster", image: "/images/coasters.jpg", desc: "Just a stylist home for your mug.", price: 34.99 },
    { name: "Noir Tote", image: "/images/tote.jpg", desc: "Roomy, durable and chic.", price: 34.99 },
    { name: "Daily Planner Kit", image: "/images/plannerkit.jpg", desc: "Stay organized, stay inspired.", price: 34.99 }
  ];

  const filteredProducts = search 
    ? products.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) || 
        product.desc.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.name === product.name);
      if (existing) {
        return prevCart.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const styles = {
    container: { 
      fontFamily: 'Futura, sans-serif', 
      color: 'rgb(18,45,18)', 
      backgroundImage: 'url(/images/coffeeback.jpg)', 
      margin: 0, 
      padding: 0,
      minHeight: '100vh'
    },
    header: { 
      backgroundColor: 'rgba(232,221,211,1)', 
      padding: '15px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: 'rgb(18,45,18)',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    searchBar: { 
      padding: '10px', 
      borderRadius: '25px', 
      border: '2px solid rgb(18,45,18)', 
      fontSize: '18px',
      width: '300px'
    },
    button: { 
      backgroundColor: 'rgb(18,45,18)', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      border: 'none' 
    },
    product: { 
      textAlign: 'center', 
      border: '1px solid rgb(151,147,147)', 
      padding: '15px', 
      borderRadius: '10px', 
      backgroundColor: 'rgba(232,221,211,0.881)' 
    },
    cartIndicator: {
      backgroundColor: 'rgb(18,45,18)',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '0.8rem',
      marginLeft: '5px',
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>THE NOIR SHOP</h1>
        <div style={styles.nav}>
          <RouterLink to="/" style={styles.navLink}>Home</RouterLink>
          <RouterLink to="/shop" style={{...styles.navLink, textDecoration: 'underline'}}>Shop</RouterLink>
          <RouterLink to="/our-story" style={styles.navLink}>Our Story</RouterLink>
          <RouterLink to="/menu" style={styles.navLink}>Menu</RouterLink>
          <RouterLink to="/events" style={styles.navLink}>Happenings</RouterLink>
        </div>
        <div>
          <i className="fas fa-shopping-cart"></i>
          <span style={styles.cartIndicator}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
        </div>
      </header>

      <main>
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Shop House Favorites</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '20px' }}>
          <input 
            style={styles.searchBar} 
            type="text" 
            placeholder="Latte me help you find something..." 
            value={search}
            onChange={handleSearchChange}
          />
          <button style={styles.button}>Search</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '60px', padding: '40px' }}>
          {filteredProducts.map((product, idx) => (
            <div style={styles.product} key={idx}>
              <img style={{ maxWidth: '100%', borderRadius: '8px' }} src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <p>${product.price}</p>
              <button style={styles.button} onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p style={{ textAlign: 'center', padding: '20px' }}>No products match your search.</p>
        )}
        <p style={{ textAlign: 'center', paddingBottom: '150px' }}>NOTE: In store pick up only.</p>
      </main>

      <footer style={{ ...styles.header, justifyContent: 'center', padding: '20px' }}>
        <p>&copy; 2025 Noir Brew. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;