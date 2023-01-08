import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(+time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (ms) => {
    const totalSec = parseInt(Math.floor(ms / 1000));

    const totalMin = parseInt(Math.floor(totalSec / 60));

    const totalHrs = parseInt(Math.floor(totalMin / 60));

    const days = parseInt(Math.floor(totalHrs / 24));

    const sec = parseInt(totalSec % 60);

    const min = parseInt(totalMin % 60);

    const hrs = parseInt(totalHrs % 24);

    if (ms > 0) {
      return `${days} : ${hrs} : ${min} : ${sec}`;
    } else {
      return "0 : 0 : 0 : 0";
    }
  };

  return <div className="timer">{getFormattedTime(time)}</div>;
};

export default Timer;
