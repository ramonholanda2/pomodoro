/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../api/firebase";

export const TaskListContext = createContext();

export function TaskListContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [addNewTask, setAddNewTask] = useState(false);
  const [addNotes, setAddNotes] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [valueTask, setValueTask] = useState('');
  const [valueNote, setValueNote] = useState('');

  function addTask () {
    setAddNewTask(!addNewTask);
  }
  
  function addNewNotes() {
    setAddNotes(!addNotes);
  }

  function updateTaskBool() {
    setNewTask(!newTask);
    console.log(newTask)
  }

  
  function cancelNewNotes() {
    setValueTask('');
    setValueNote('');
    setAddNotes(false);
    setAddNewTask(!addNewTask);
  }

  function saveTask() {
    const createdAt = Number(new Date());
    
    const task = {
      task: valueTask,
      description: valueNote,
      createdAt: createdAt
    }
    
    db.collection('tasks').add(task)
      .then((docRef) => console.log('sucess', docRef.id))
      .catch(error => console.log('error ', error))

    cancelNewNotes();
  }

  function deleteTask(docRef) {
    db.collection('tasks').doc(docRef).delete();
  }

  function updateTask(docRef, newTask) {
    db.collection('tasks').doc(docRef).update(newTask);
  }

  useEffect(() => {
    db.collection("tasks")
     .where("createdAt", ">=", 1622218106043)
     .orderBy("createdAt", "asc").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          details: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addNewTask,
        addNotes,
        valueTask,
        valueNote,
        newTask,
        addTask,
        deleteTask,
        addNewNotes,
        cancelNewNotes,
        setValueTask,
        setValueNote,
        setNewTask,
        saveTask,
        updateTask,
        updateTaskBool,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
}

export const useTaskListContext = () => {
  return useContext(TaskListContext);
};
