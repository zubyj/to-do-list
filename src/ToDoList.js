import { useState } from 'react';
import './ToDoList.css';
import Task from './Task.js'
import InputField from './InputField'
import List from './List'

function ToDoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  // Add task to end of list.
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setList(list.concat(task));
    setTask('');
  }

  // Delete task at given index.
  const deleteTask = (index) => {
    console.log('deleted ' + list[index] +  ' at index ' + index); 
    const newList = list.filter((_, theIndex) => index !== theIndex);
    setList(newList);
  }

  const editTask = (index, newTask) => {
    setList(list.map((item, theIndex) => {
      if (index === theIndex) {
        return newTask;
      }
      return item;
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <List list={list} />
        <InputField value={task} handleSubmit={handleSubmit} setText={setTask} />
      </header>
    </div>
  );
}

export default ToDoList;
