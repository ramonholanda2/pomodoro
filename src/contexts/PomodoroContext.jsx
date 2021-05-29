/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useContext, useEffect } from "react";

export const PomodoroContext = createContext();

export function PomodoroContextProvider({ children }) {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [toggleBreak, setToggleBreak] = useState(true);
  const [options, setOptions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [on, setOn] = useState(false);
  let cont;

  function onPomodoro() {
    setOn(true);
  }

  function pausePomodoro() {
    clearTimeout(cont);
    setOn(false);
  }
  
  function restPomodoro() {
    pausePomodoro();
    setToggleBreak(!toggleBreak);
    setSeconds(0);
    toggleBreak ? setMinutes(5) : setMinutes(25);
  }
  
  function renderOptions() {
    setOptions(!options);
  }
  
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  
  function nextPomodoro() {
    if (window.confirm("Deseja pular este ciclo?")) {
      restPomodoro();
    } else {
      console.log("Jack");
    }
  }

  useEffect(() => {
    if (on === true && minutes >= 0 && seconds >= 0) {
      cont = setTimeout(() => {
        if (minutes > 0 && seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (minutes === 0 && seconds === 0) {
          restPomodoro();
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, on]);

  return (
    <PomodoroContext.Provider
      value={{
        minutes,
        seconds,
        on,
        toggleBreak,
        options,
        darkMode,
        onPomodoro,
        pausePomodoro,
        nextPomodoro,
        renderOptions,
        toggleDarkMode,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export const usePomodoroContext = () => {
  return useContext(PomodoroContext);
};
