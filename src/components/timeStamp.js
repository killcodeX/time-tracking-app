import React, { useState, useRef } from "react";

export default function TimeStamp() {
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
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="time">
      <p>
      {formatTime()}
      </p>
      <div className="buttons">
      {
            !isActive && !isPaused ?
              <button onClick={handleStart}><i class="btn-play fas fa-play"></i></button>
              : (
                isPaused ? <button onClick={handlePause}><i class="fas fa-pause"></i></button> :
                  <button onClick={handleResume}><i class="btn-play fas fa-play"></i></button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}><i class="btn-stop fas fa-stop"></i></button>
      </div>
    </div>
  );
}
