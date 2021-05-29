import React from 'react';
import Pomodoro from './components/Pomodoro/Pomodoro';
import TaskList from './components/TaskList/TaskList';

import { PomodoroContextProvider } from './contexts/PomodoroContext';
import { TaskListContextProvider } from './contexts/TaskListContext';
import './App.css';

const App = () => {
    return (
        <PomodoroContextProvider>
            <div className="app">
                <Pomodoro />
                <TaskListContextProvider>
                    <section>
                        <TaskList />
                    </section>
                </TaskListContextProvider>
            </div>
        </PomodoroContextProvider>
    )
}

export default App
