import React, { useEffect, useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

import styled from "styled-components";

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
  :disabled {
    opacity: 0.5;
  }
  ::placeholder {
    color: #ECF0F3;
  }
`;

const Box = styled.div`
    position: relative;
    height: 200px;
    min-width: 245px;
    background: #E3E6EC;
    box-shadow: 18px 18px 20px #D1D9E6, -18px -18px 20px #FFFFFF;
    border-radius: 30px;
    text-align: center;
    color: #6A6B7A;
    padding: 0.8rem 1.6rem;
    font-weight: bold;
    font-size: 2.4rem;
`;

const Font = styled.div`
  font-size: 6rem;
`;

const Weather = () => {
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

  const dateBuild = () => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1cfe0cf18d80746996abecfe0e00d867&units=imperial`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };


  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Appreciate Nature." />
          <Row>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <div>
                    <h1 className="hero-title">
                      Perhaps a walk 
                    <span style={{color: '#6A6B7A'}}> outside</span>.
                    </h1>
                  </div>
                  <br />
                  <div>
                    <p>
                      Check the weather near you, before spending time in nature.
                    </p>
                  </div>
                  <div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Atlanta"
                        className="search-bar"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <Box>
                    {typeof weather.main != "undefined" ? (
                      <div>
                        <div>
                          <Font>
                            {Math.round(weather.main.temp)}°C
                          </Font>
                        </div>
                        <div>
                          <h1 className="hero-title">{weather.weather[0].main}</h1>
                        </div>
                        <div>
                          <p className="hero-title">
                            on {dateBuild(new Date())} in <span>{weather.name}, {weather.sys.country}</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </Box>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Weather;