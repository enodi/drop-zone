import React from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: Date;
}

const Countdown: React.FC<Props> = ({expiryTimestamp}) => {
  let {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const countdownTimer = (timer: any) => {
    const convertedTimer = Array.from(timer.toString()).length > 1 ? timer : '0' + timer;
    return Array.from(convertedTimer.toString()).map((time: any, index) => {
      return (
        <span key={index} className='timer'>{time}</span>
      )
    })
  }

  return (
    <div className='countdown'>
      <div className='countdown-item'>
        <span>{countdownTimer(days)}</span>
        <span className='countdown-label'>Days</span>
      </div>
      <div className='countdown-item'>
        <span>{countdownTimer(hours)}</span>
        <span className='countdown-label'>Hours</span>
      </div>
      <div className='countdown-item'>
        <span>{countdownTimer(minutes)}</span>
        <span className='countdown-label'>Minutes</span>
      </div>
      <div className='countdown-item'>
        <span>{countdownTimer(seconds)}</span>
        <span className='countdown-label'>Seconds</span>
      </div>
    </div>
  )
}

export default Countdown;
