import React from 'react';
import { useTimer } from 'react-timer-hook';
 
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
    <div style={{fontSize: '10rem'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
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
