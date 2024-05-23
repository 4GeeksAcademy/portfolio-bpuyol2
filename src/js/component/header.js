import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <div className="header__info">
            <h1 className="header__name">BÁRBARA PUYOL FONT</h1>
            <h2 className="header__title">Fullstack Developer</h2>
            <a href="mailto:676939849b.puyolfont@gmail.com" className="header__email">
              676939849b.puyolfont@gmail.com
            </a>
            <div className="header__social">
              <a href="https://www.linkedin.com/in/barbara-puyol-font/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/bpuyolMadrid" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;