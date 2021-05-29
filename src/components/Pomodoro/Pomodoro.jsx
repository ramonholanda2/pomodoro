import React from "react";

import Options from './Options/Options';
import { GiNextButton } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";

import { usePomodoroContext } from "../../contexts/PomodoroContext.jsx";

import styles from "./Pomodoro.module.scss";

const Pomodoro = () => {
  const { 
      minutes, 
      seconds, 
      onPomodoro, 
      pausePomodoro, 
      on, 
      toggleBreak,
      nextPomodoro,
      renderOptions,
      options,
      darkMode
    } = usePomodoroContext();

  return (
    <div 
     style={darkMode ? {backgroundColor: '#080808', color: "white"} : null}
     className={styles.pomodoro}>
       <div 
        style={darkMode ? {backgroundColor: '#640054', color: "white"} : null}
        className={styles.divPomodoro}>
        <div className={styles.header}>
          {toggleBreak ? <h1>Pomodoro</h1> : <h1>Descanso</h1>}
          <button onClick={() => renderOptions()}>
            <IoSettingsSharp size='1.8rem' color={!darkMode  ? 'black' : 'white'} />
          </button>
        </div>
        
        {options ? <Options /> : null}

        <div className={styles.time}>
          {minutes < 10 ? (
            <>
              <span>0</span>
              <span>{minutes}</span>
            </>
          ) : (
            <span>{minutes}</span>
          )}

          <span>:</span>
          {seconds < 10 ? (
            <>
              <span>0</span>
              <span>{seconds}</span>
            </>
          ) : (
            <span>{seconds}</span>
          )}
        </div>
        <div className={styles.btns}>
          <button
            className={styles.playPomodoro}
            onClick={on ? pausePomodoro : onPomodoro}
          >
            {on ? "Pausar" : "Começar"}
          </button>
          <button 
            onClick={() => nextPomodoro()}
            className={styles.nextCicleBtn}
          >
            <GiNextButton size="2rem" color={!darkMode ? 'black' : 'white'} />
          </button>
        </div>
       </div>
    </div>
  );
};

export default Pomodoro;
