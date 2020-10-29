import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <h1 className="hero-title">until next time</h1>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
