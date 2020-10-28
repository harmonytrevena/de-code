import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
// import PortfolioContext from '../../context/context';

const Header = () => {
  // const { hero } = useContext(PortfolioContext);
  // const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">welcome to
            <span className="text-color-main"> d e . c o d e</span>
          </h1>
          {/* <h2 className="">a place to recharge and reflect</h2>
          <br /> */}
        </Fade>
        <br />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>calm awaits you</Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
