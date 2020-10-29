import React, { useEffect, useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import StateContext from '../../context';

import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  display: inline-block;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  color: #6A6B7A;
  margin: 0.5em 0.5em 0.5em 0em;
  padding: 0.8rem 1.6rem;
  font-weight: bold;
  font-size: 2.4rem;
  :disabled {
    opacity: 0.5;
  }
  :hover {
    background-color: #6A6B7A;
    color: white;
  }
`;

const Input = styled.input`
  background: transparent;
  display: inline-block;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  color: #6A6B7A;
  margin: 0.5em 1em 0.5em 0em;
  padding: 0.8rem 1.6rem;
  font-weight: bold;
  font-size: 2.4rem;
  max-width: 325px;
  :disabled {
    opacity: 0.5;
  }
  ::placeholder {
    color: #ECF0F3;
  }
`;

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
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="project-wrapper__text">
                <div>
                  <h1 className="hero-title">
                    I am grateful for 
                  <span style={{color: '#6A6B7A'}}> {item}</span>.
                  </h1>
                </div>
              </div>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="project-wrapper__text">
                <div>
                  <form onSubmit={e => _handleSubmit(e)}>
                      <Input 
                          data-testid="messageText"
                          type="text" 
                          name="newItem" 
                          placeholder="type here" 
                          value={input}
                          onChange={(event) => _handleChange(event.target.value)}
                      />
                      <Button type="submit" data-testid="sendButton">Practice Gratitude</Button>
                  </form>
                </div>
              </div>
            </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Gratitude;
