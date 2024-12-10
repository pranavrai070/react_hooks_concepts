import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header 
      style={{
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h1>Theme Context Example</h1>
    </header>
  );
};

export default Header;
