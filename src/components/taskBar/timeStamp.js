import React, { useState, useRef } from "react";
// import {getTime} from '../redux/actions/actions';

export default function TimeStamp({value, onchange}) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    convertTime(timer)
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const convertTime = (tm) => {
    const getSeconds = `0${tm % 60}`.slice(-2);
    const minutes = `${Math.floor(tm  / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(tm  / 3600)}`.slice(-2);
    onchange(`${getHours} : ${getMinutes} : ${getSeconds}`)
  }

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="time">
      <p>{formatTime()}</p>
      <div className="buttons ml-3">
        {!isActive && !isPaused ? (
          <button type='button' onClick={handleStart}>
            <i className="btn-play fas fa-play"></i>
          </button>
        ) : isPaused ? (
          <button type='button' onClick={handlePause}>
            <i className="fas fa-pause"></i>
          </button>
        ) : (
          <button type='button' onClick={handleResume}>
            <i className="btn-play fas fa-play"></i>
          </button>
        )}
        <button type='button' className="ml-3" onClick={handleReset} disabled={!isActive}>
          <i className="btn-stop fas fa-stop"></i>
        </button>
      </div>
    </div>
  );
}
