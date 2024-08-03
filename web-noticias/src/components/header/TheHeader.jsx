import React from 'react';
import NavBar from '../nav-bar/navBar';

const TheHeader = () => {
  return (
    <header className="header">
      <h1 className="header__title">The News App</h1>
      <NavBar />
    </header>
  );
}

export default TheHeader;
