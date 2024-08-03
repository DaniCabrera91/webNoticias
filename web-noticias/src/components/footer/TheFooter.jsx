import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <a href="https://developer.nytimes.com" target="_blank" rel="noopener noreferrer" className="footer__link">Developer API</a>
      <p className="footer__text">&copy; 2024 The News App</p>
      <a href="https://github.com/DaniCabrera91" target="_blank" rel="noopener noreferrer" className="footer__link">By Dani Cabrera</a>
      <button className="footer__button" onClick={scrollToTop}>Volver arriba</button>
    </footer>
  );
};

export default Footer;

