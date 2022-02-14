import { useState } from 'react';
import './ToDoList.css';
import Task from './Task.js'

// Material UI imports
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

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
        
        {/* Text input & submit btn */}
        <form onSubmit={handleSubmit}>
          <TextField 
          id="outlined-basic" 
          label="Enter task" 
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          /> 
          <Button
            id="outlined-basic"
            variant="outlined"
            type="submit"
          >
            Submit
          </Button>
        </form>

        {/* List of tasks */}
        {list.map((task, index) => {
              return (
                <Task key={index} id={index} text={task} deleteTask={deleteTask} editTask={editTask}/>
              )
        })}
      </header>
    </div>
  );
}

export default ToDoList;
