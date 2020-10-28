import React, { useEffect, useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import StateContext from '../../context';


const Gratitude = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [value, dispatch] = useContext(StateContext);
  const [input, setInput] = useState('');
  const { item } = value;

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const _handleChange = (item) => {
    setInput(item);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: "CHANGE_INPUT",
        item: input,
    });
    setInput('');
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Practice Gratitude." />
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
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
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <div>
                    <h2>I am grateful for <strong>{item}</strong>.</h2>
                  </div>
                  <br />
                  <div>
                  <form onSubmit={e => _handleSubmit(e)}>
                      <input 
                          type="text" 
                          name="newItem" 
                          placeholder="What are you grateful for?" 
                          value={input}
                          onChange={(event) => _handleChange(event.target.value)}
                      />
                      <button type="submit">Practice Gratitude</button>
                  </form>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Gratitude;
