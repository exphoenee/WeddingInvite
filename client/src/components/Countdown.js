import React, { useEffect, useState } from "react";

const Countdown = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  const calculateTimeLeft = () => {
    let difference = +new Date(`04/24/2021 16:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        nap: Math.floor(difference / (1000 * 60 * 60 * 24)),
        óra: Math.floor((difference / (1000 * 60 * 60)) % 24),
        perc: Math.floor((difference / 1000 / 60) % 60),
        másodperc: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={Math.random() * 100}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown" style={{ textAlign: "center" }}>
      {timerComponents.length ? timerComponents : <span>Már lekésted!</span>}
      <span> múlva</span>
    </div>
  );
};

export default Countdown;
