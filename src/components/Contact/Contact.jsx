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
        <Title title="until next time" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Come back next time you need a moment to de.code</p>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
