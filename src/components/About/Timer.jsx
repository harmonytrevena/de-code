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
 
function Countdown({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
  return (
      <div style={{textAlign: 'center'}}>
      <Box>
        <div style={{fontSize: '10rem'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </Box>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time)
        }}>Restart</button>
      </div>
  );
}
 
export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div>
      <Countdown expiryTimestamp={time} />
    </div>
  );
}
