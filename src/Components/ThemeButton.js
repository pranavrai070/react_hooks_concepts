import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#007BFF' : '#555',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeButton;
