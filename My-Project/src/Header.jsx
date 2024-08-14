import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!isOpen);
    }

    return (
        <header>
        <nav>
        <div className="logo">PROJECT</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
      </header>
    );
}

export default Navbar;