import { useState } from 'react';
import './ToDoList.css';
import InputField from './InputField'
import Task from './Task'

function ToDoList() {
  
  const [list, setList] = useState([]);

  // Delete task at given index.
  const deleteTask = (index) => {
    console.log('deleted ' + list[index] +  ' at index ' + index); 
    const newList = list.filter((_, theIndex) => index !== theIndex);
    setList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <Task id={index} task={item} deleteTask={deleteTask}/>
            </div>
        )})}
        <InputField list={list} setList={setList}/>
      </header>
    </div>
  );
}

export default ToDoList;
