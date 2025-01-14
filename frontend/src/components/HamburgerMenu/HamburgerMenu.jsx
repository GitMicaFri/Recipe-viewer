import { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <a href="#">Startsida</a>
          <a href="#">Mina recept</a>
          <a href="#">Kategorier</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
