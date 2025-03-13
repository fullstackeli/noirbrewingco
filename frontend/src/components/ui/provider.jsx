'use client'

import React, { createContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'; // Bootstrap component

// Create context to manage the theme (light/dark)
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Apply the theme to the body element
    document.body.classList.toggle('bg-dark', theme === 'dark');
    document.body.classList.toggle('bg-light', theme === 'light');
    document.body.classList.toggle('text-white', theme === 'dark');
    document.body.classList.toggle('text-dark', theme === 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>
        {/* The rest of the app */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Usage in your main component
export function Provider(props) {
  return (
    <ThemeProvider>
      <Container>
        {/* Pass props as needed */}
        {props.children}
      </Container>
    </ThemeProvider>
  );
}
