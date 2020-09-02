import React, { useState, useEffect } from 'react';

import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="clock">
      <p className="time">{time}</p>
    </div>
  );
}

export default Clock;