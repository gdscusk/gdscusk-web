// components/Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '8vh',
  };

  return (
    <header style={headerStyle}>
      <img
        src="/assets/header/header.png"
        alt="Deskripsi Gambar"
        style={imageStyle}
      />
    </header>
  );
};

export default Header;
