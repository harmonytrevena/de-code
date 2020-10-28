import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <p className="footer__text">Built for you by Harmony.</p>
      </Container>
    </footer>
  );
};

export default Footer;
