import React, { useEffect, useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import keys from "./keys";

const api = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
  };

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

  const dateBuild = (d) => {
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
                  <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 18
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
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

export default Weather;