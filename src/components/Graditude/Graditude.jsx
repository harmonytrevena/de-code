import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import GraditudeBoard from './GratidueBoard';

const Gratitude = () => {
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
          <Title title="Practice Gratitude." />
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Project Title</h3>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque,
                      ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum
                      consequatur blanditiis inventore debitis fuga numquam voluptate architecto
                      itaque molestiae.
                    </p>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <GraditudeBoard />
      </Container>
    </section>
  );
};

export default Gratitude;
