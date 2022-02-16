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

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show:show, type, msg})
  }

  const addTask = (e) => {
    e.preventDefault();
    // remove whitespace
    if (text.replace(/\s+/g, '') === '') {
      showAlert(true, 'error', 'Please enter a task');
      return;
    }
    setList(list.concat(text));
    setText('');  
    showAlert(true, 'success', 'Task added')
  }
  
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

  const editTask = (index, newTask) => {
      // remove whitespace
      if (newTask.replace(/\s+/g, '') === '') {
        showAlert(true, 'error', 'Please edit by entering a new task')
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

  // move task from completed list to todo list
  const readdTask = (index) => {
    setDoneList(doneList.filter((item, theIndex) => {
      if (index === theIndex) {
        setList(list.concat(item));
      }
      else {
        return item;
      }
    }))
    showAlert('true', 'success', 'Readded task');
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header size={list.length} />
        <div className="List">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <Task id={index} text={item} deleteTask={deleteTask} editTask={editTask} showAlert={showAlert}/>
              </div>
          )})}
        </div>
        <form onSubmit={addTask}>
          <AddTaskForm text={text} handleChange={(e) => setText(e.target.value)}/>
        </form>
        <span className="Alert  ">
          {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        </span>
        <DoneList list={doneList} setList={setDoneList} readdTask={readdTask}/>

      </header>
    </div>
  );
}

export default ToDoList;
