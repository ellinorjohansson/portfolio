import { useState } from 'react';
import './Header.scss'

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <h1>Ellinor Johansson</h1>
        <button className={`header-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="">About me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Get in touch</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
