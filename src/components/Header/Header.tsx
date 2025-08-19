import { useEffect, useState } from 'react';
import './Header.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Matchar id i samma ordning som i nav
      const sectionIds = ['about', 'projects', 'skills', 'getInTouch'];
      let current = sectionIds[0];

      // Hitta den sektion vars topp är närmast men ovanför headern för scrollvy i nav
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 90) {
            current = sectionIds[i];
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stäng meny vid klick på länk på mobil
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <h1>Ellinor Johansson</h1>
      <button
        className={`header-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
        <ul>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleNavClick}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#getInTouch"
              className={activeSection === 'getInTouch' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
