import React from 'react';
import { useTimer } from 'react-timer-hook';

import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 40px solid #E3E6EC;
  box-sizing: border-box;
  box-shadow: inset 20px 20px 30px #D1D9E6, inset -20px -20px 30px #FFFFFF;
  border-radius: 1000px;
`;

const Font = styled.div`
  padding-top: 8rem;
  font-size: 10rem;
`;

const Button = styled.button`
  background: transparent;
  display: inline-block;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  color: #6A6B7A;
  margin: 0.5em;
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
 
function Countdown({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <Box>
          <Font>
            <span>{minutes}</span>:<span>{seconds}</span>
          </Font>
        </Box>
        <br />
        <br />
        <div>
          <Button onClick={pause}>pause</Button>
          <Button onClick={resume}>resume</Button>
          <Button onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 601);
            restart(time)
          }}>restart</Button>
        </div>
      </div>
    </>
  );
}
 
export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 601);
  return (
    <div>
      <Countdown expiryTimestamp={time} />
    </div>
  );
}
