import React, { useState } from 'react';
import './ToDoList.css';
import AddTaskForm from './AddTaskForm'
import Task from './Task'
import DoneList from './DoneList'

function ToDoList() {
  
  const [list, setList] = useState([]); 
  const [doneList, setDoneList] = useState([]);
  const [text, setText] = useState('');
  
  const deleteTask = (index) => {
    console.log('delete at index ' + index);

    const newList = list.filter((task, theIndex) => {
      if (index !== theIndex) {
        return task;
      }
      else {
        console.log('removed ' + task);
        setDoneList(doneList.concat(task));
      }
    });
    setList(newList);
  }

  const addTask = (e) => {
    e.preventDefault();
    setList(list.concat(text));
    setText('');
  }

  const editTask = (index, newTask) => {
    const newList = list.map((task, theIndex) => {
      if (index === theIndex) {
        return newTask;
      }
      return task; 
    })
    setList(newList);
  }

  const handleAddTaskChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <Task id={index} text={item} deleteTask={deleteTask} editTask={editTask}/>
            </div>
        )})}
        <form onSubmit={addTask}>
          <AddTaskForm text={text} handleChange={handleAddTaskChange}/>
        </form>
        <DoneList list={doneList} setList={setDoneList}/>
      </header>
    </div>
  );
}

export default ToDoList;
