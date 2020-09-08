import React from 'react';
import haderSVG from 'assets/images/header.svg';
import './Header.scss';
const Header = () => {
  return (
    <>
      <img className="Header" src={haderSVG} alt={haderSVG} />
    </>
  );
};

export default Header;
