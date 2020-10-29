import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';


const Silence = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Observe silence." />
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="project-wrapper__text">
                <div>
                  <h1 className="hero-title">
                    A simple 
                  <span style={{color: '#6A6B7A'}}> meditation</span>.
                  </h1>
                </div>
                <br />
                <div>
                  <p>
                    Settle yourself. Turn off distractions. Close your door. Take a moment to calm your thoughts. Allow your body to be comfortable, seated in a chair, with your spine supported. Turn your attention to your breath. Breathe in and out through your nose. Allow your eyelids to softly close and settle your awareness within. These next ten minutes are your own.
                  </p>
                  <p>
                    - wonder finder
                  </p>
                </div>
              </div>
            </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Silence;