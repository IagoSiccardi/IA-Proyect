import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ duration }) => {
  const date = new Date().getTime()

  const newDate = new Date('January 10, 2023 00:00:00').getTime()
   
  const finalDate = +newDate - date

  const [time, setTime] = useState(finalDate);


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
