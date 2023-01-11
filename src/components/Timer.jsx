import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ handleModal }) => {
  const date = new Date().getTime();

  const newDate = new Date("January 20, 2023 00:00:00").getTime();

  const finalDate = +newDate - date;

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
      return (
        <>
          <li>{days}:</li>
          <li>{hrs}:</li>
          <li>{min}:</li>
          <li>{sec}</li>
        </>
      );
    } else {
      return "0 : 0 : 0 : 0";
    }
  };

  return (
    <section className="container-modal" onClick={(e) => e.target.className === "container-modal" && handleModal() } >
      <article className="timer-modal">
        <span class="material-symbols-outlined close" onClick={handleModal}>
          close
        </span>
        <h2 className="timer-h2">Release date</h2>
        <article className="timer">
          <ul className="timer-numbers">
            {getFormattedTime(time)}
          </ul>
          <ul className="timer-unitis">
            <li>Days</li>
            <li>Hrs</li>
            <li>Min</li>
            <li>sec</li>
          </ul>
        </article>
      </article>
    </section>
  );
};

export default Timer;
