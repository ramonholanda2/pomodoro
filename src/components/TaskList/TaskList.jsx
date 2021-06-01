import React from "react";
import { usePomodoroContext } from "../../contexts/PomodoroContext.jsx";

import { useTaskListContext } from "../../contexts/TaskListContext";

import Task from './Task/Task';

import styles from "./TaskList.module.scss";

const TaskList = () => {
  const { darkMode } = usePomodoroContext();

  const {
    tasks,
    addTask,
    addNewTask,
    addNotes,
    addNewNotes,
    cancelNewNotes,
    setValueTask,
    setValueNote,
    saveTask,
  } = useTaskListContext();

  return (
      <div style={darkMode ? {backgroundColor: '#080808', color: 'whitesmoke'} : null} className={styles.tasks}>
        <h1>Todo App</h1>
        <div className={styles.todo}>
          <ul>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
              ))}
          </ul>

          {addNewTask ? (
            <div style={darkMode ? {color: 'black'} : null} className={styles.addNewTask}>
              <input
                onChange={(e) => setValueTask(e.target.value)}
                type="text"
                placeholder="Tarefa"
              />
              {addNotes ? (
                <input
                  onChange={(e) => setValueNote(e.target.value)}
                  type="text"
                  placeholder="Adicione sua Nota"
                />
              ) : (
                <span onClick={() => addNewNotes()}>+ Nota</span>
              )}
              <footer className={styles.footerAddTask}>
                <button onClick={() => saveTask()}>Salvar</button>
                <button onClick={() => cancelNewNotes()}>Cancelar</button>
              </footer>
            </div>
          ) : null}

          <button
            className={!addNewTask ? styles.addTaskBtn : styles.hiddenBtn}
            onClick={() => addTask()}
          >
            Adicionar
          </button>
        </div>
      </div>
  );
};

export default TaskList;
