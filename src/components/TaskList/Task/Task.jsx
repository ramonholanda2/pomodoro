import React, { useState } from "react";
import { useTaskListContext } from "../../../contexts/TaskListContext";

import { FiDelete } from "react-icons/fi";
import { RiEditFill } from "react-icons/ri";

import styles from "./Task.module.scss";

const Task = ({ task }) => {
  const { deleteTask, updateTask } = useTaskListContext();
  const [changeTask, setChangeTask] = useState(false);
  const [newValueTask, setNewValueTask] = useState('i');
  const [newValueNote, setNewValueNote] = useState('');
  
  function editTask() {
    setChangeTask(true);
    setNewValueTask(task.details.task);
    setNewValueNote(task.details.description);
  }

  function saveNewTask() {
    if(newValueTask !== '') {
      updateTask(task.id, {
        task: newValueTask,
        description: newValueNote
      });
  
      setChangeTask(false);
      setNewValueNote('')
      setNewValueTask('');
    } 
  }

  return (
    <li>
      {!changeTask ? (
        <>
          <div className={styles.task}>
            <h2>{task.details.task}</h2>
            <span>{task.details?.description}</span>
          </div>
          <div className={styles.optionsTask}>
            <button onClick={() => deleteTask(task.id)}>
              <FiDelete size="1.3rem" />
            </button>
            <button onClick={editTask}>
              <RiEditFill size="1.3rem" />
            </button>
          </div>
        </>
      ) : (
        <div className={styles.addNewTask}>
          <input 
            value={newValueTask} 
            onChange={(e) => setNewValueTask(e.target.value)} 
            type="text" 
            placeholder="Edite sua tarefa" />
          <input 
            value={newValueNote} 
            onChange={(e) => setNewValueNote(e.target.value)} 
            type="text" 
            placeholder="Adicione ou edite sua Nota" />
          
          <footer className={styles.footerAddTask}>
            <button onClick={saveNewTask}>Atualizar</button>
            <button onClick={() => setChangeTask(false)}>Cancelar</button>
          </footer>
        </div>
      )}
    </li>
  );
};

export default Task;
