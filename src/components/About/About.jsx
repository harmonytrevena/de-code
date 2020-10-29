import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Timer from './Timer';

const About = () => {
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
    <section id="about">
      <Container>
        <Title title="set the timer." />
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="about-wrapper__image">
              <Timer />
            </div>
          </Fade>
          <br />
          <br />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div>
              <h1 className="hero-title">
                The next ten minutes are completely 
              <span style={{color: '#272341'}}> yours</span>.
              </h1>
              </div>
          </Fade>
          <br />
          <br />
      </Container>
    </section>
  );
};

export default About;
