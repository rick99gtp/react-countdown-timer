import { getDefaultNormalizer } from "@testing-library/react";
import { useState, useEffect } from "react";
import TimeElement from './TimeElement';
import "./CountdownTime.css";

const CountdownTime = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const timeCategory = ["days", "hours", "minutes", "seconds"];

  const timeEl = timeCategory.map((el, idx) => (
    <div className="time-element">
      <p>
        {idx === 0
          ? days
          : idx === 1
          ? hours
          : idx === 2
          ? minutes
          : idx === 3
          ? seconds
          : null}
      </p>
      <span>{el}</span>
    </div>
  ));

  const targetDate = new Date("January 8 2022");

  const getData = () => {
    const currentDate = new Date();

    setTotalSeconds((targetDate - currentDate) / 1000);
  };

  useEffect(() => {
    getData();

    const timeData = setInterval(() => {
      getData();

      if (seconds < 0) {
        clearInterval(timeData);
      }
    }, 1000);

    return () => clearInterval(timeData);
  }, []);

  useEffect(() => {
    setSeconds(Math.floor(totalSeconds % 60));
  }, [totalSeconds]);

  useEffect(() => {
    setMinutes(Math.floor((totalSeconds / 60) % 60));
  }, [seconds]);

  useEffect(() => {
    setHours(Math.floor((totalSeconds / (1000 * 60 * 60)) % 24));
  }, [minutes]);

  useEffect(() => {
    setDays(Math.floor(totalSeconds / 86400));
  }, [hours]);

  return (
    <div className="time">
      <TimeElement time={days} timeName={timeCategory[0]} />
      <TimeElement time={hours} timeName={timeCategory[1]}/>
      <TimeElement time={minutes} timeName={timeCategory[2]}/>
      <TimeElement time={seconds} timeName={timeCategory[3]}/>
    </div>
  );
};

export default CountdownTime;
