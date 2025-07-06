import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === undefined) return;

    timerComponents.push(
      <motion.div 
        key={interval}
        initial={{ opacity: 0, y:10 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        className="countdown-item"
      >
        <span className="countdown-value">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="countdown-label">{interval}</span>
      </motion.div>
    );
  });

  return (
    <div className="my-8">
      <p className="text-center text-red-300 font-semibold text-lg mb-4">
        🔥 Webinar Starts In: 🔥
      </p>
      <div className="flex justify-center space-x-2 md:space-x-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;