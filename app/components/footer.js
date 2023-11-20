// components/Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
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
    <footer style={footerStyle}>
      <img
        src="/assets/footer/footer.png"
        alt="Deskripsi Gambar"
        style={imageStyle}
      />
    </footer>
  );
};

export default Footer;

