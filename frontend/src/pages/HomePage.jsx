// src/components/HomePage.jsx
import React from 'react';
import Promo from '../components/Promo.jsx';


// not the code we want to use (used for testing only)

function HomePage() {
    return (
        <div>
            <header style={{ padding: '50px', textAlign: 'center', backgroundColor: '#efebe9', color: '#6d4c41' }}>
                <h1>Welcome to Noir Brew</h1>
                <p>Discover your perfect cup of coffee. Crafted with love and precision.</p>
            </header>
            
            <section style={{ padding: '20px', fontSize: '18px' }}>
                <h2>Featured Roasts</h2>
                <p>Check out our exclusive selection of the finest coffee beans from around the world.</p>
                <button style={{ padding: '10px 20px', backgroundColor: '#6d4c41', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Shop Now
                </button>
            </section>
             
        </div>
    );
}

export default HomePage;
