import React from 'react'
import { IoCloseSharp } from 'react-icons/io5';

import { usePomodoroContext } from "../../../contexts/PomodoroContext.jsx";

import styles from './Options.module.scss';

const Options = () => {
    const { renderOptions, darkMode, toggleDarkMode } = usePomodoroContext();
    
    return (
        <div
         className={styles.options}>
            <div style={darkMode ? {backgroundColor: 'black'} : null} className={styles.configPomodoro}>
                <header className={styles.headerConfig}>
                    <span>Configuração do pomodoro</span>
                    <button onClick={() => renderOptions()}>
                        <IoCloseSharp size='2rem' color={!darkMode ? 'black' : 'white'} />
                    </button>
                </header>
                
                <div className={styles.darkMode}>
                    <span>Habilitar Modo Escuro</span>
                        <div 
                         style={darkMode ? {backgroundColor: 'green', justifyContent: 'flex-end'} : null}
                         onClick={() => toggleDarkMode()} className={styles.toggleBtn}>
                            <div className={styles.toggleActive} />
                        </div> 
                </div>
                <footer className={styles.footer}>
                    <button onClick={() => renderOptions()}>Salvar</button>
                </footer>

            </div>
        </div>
    )
}

export default Options
