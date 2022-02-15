import React, { useState } from 'react';
import './ToDoList.css';
import AddTaskForm from './AddTaskForm'
import Task from './Task'
import DoneList from './DoneList'
import Alert from './Alert'
import Header from './Header'

function ToDoList() {
  
  const [list, setList] = useState([]); 
  const [doneList, setDoneList] = useState([]);
  const [text, setText] = useState('');
  const [alert, setAlert] = useState({
    show:false, 
    msg: '', 
    type:'',
  })
  
  const deleteTask = (index) => {
    const newList = list.filter((task, theIndex) => {
      if (index !== theIndex) {
        return task;
      }
      else {
        setDoneList(doneList.concat(task));
      }
    });
    setList(newList);
  }

  const addTask = (e) => {
    e.preventDefault();
    // remove whitespace from text and check if empty string input.
    if (text.replace(/\s+/g, '') === '') {
      showAlert(true, 'error', 'Please enter a task');
      return;
    }

    setList(list.concat(text));
    setText('');
    showAlert(true, 'success', 'Task ' + list.length+ ' added to list')
  }

  const editTask = (index, newTask) => {
        // remove whitespace from text and check if empty string input.
        if (newTask.replace(/\s+/g, '') === '') {
      showAlert(true, 'error', 'Cannot change to empty task')
      return;
    }

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

  // move task from DoneList to ToDoList.
  const readdTask = (index) => {

    setDoneList(doneList.filter((item, theIndex) => {
      if (index === theIndex) {
        setList(list.concat(item));
      }
      else {
        return item;
      }
    }))
  };

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show:show, type, msg})
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header size={list.length} />
        <div className="List-items">
          {list.map((item, index) => {
            return (
              <div key={index} className="Task-item">
                <Task id={index} text={item} deleteTask={deleteTask} editTask={editTask}/>
              </div>
          )})}
        </div>
        <form onSubmit={addTask}>
          <AddTaskForm text={text} handleChange={handleAddTaskChange}/>
        </form>
        <DoneList list={doneList} setList={setDoneList} readdTask={readdTask}/>
      </header>
      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
    </div>
  );
}

export default ToDoList;
