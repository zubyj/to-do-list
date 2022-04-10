import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import AddForm from './components/AddForm'
import Task from './components/Task'
import DoneList from './components/DoneList'
import Alert from './components/Alert'
import Header from './components/Header'

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function ToDoList() {
  
  const [list, setList] = useState([]); 
  const [doneList, setDoneList] = useState([]);
  const [text, setText] = useState('');
  const [alert, setAlert] = useState({
    show:false, 
    msg: '', 
    type:'',
  })

  // On refresh, reload data if exists
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setList(storageTodos[0]);
      setDoneList(storageTodos[1]);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([list, doneList]))
  }, [list, doneList])    

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show:show, type, msg})
  }

  // Adds task at end of list
  const addTask = (e) => {
    e.preventDefault();
    // If user submits empty task, return error.
    if (text.replace(/\s+/g, '') === '') {
      showAlert(true, 'error', 'Please enter a task');
      return;
    }
    setList(list.concat(text));
    setText('');  
    showAlert(true, 'add', 'Task added')
  }
  
  // Deletes task at given index
  const deleteTask = (index) => {
    const newList = list.filter((_, theIndex) => index !== theIndex);
    setList(newList);
    showAlert(true, 'delete', 'Task deleted')
  }

  // Moves task to done list
  const finishTask = (index) => {
    const finishedTask = list.filter((_, theIndex) => index === theIndex);
    setDoneList(doneList.concat(finishedTask));
    deleteTask(index);
    showAlert(true, 'done', 'Task finished. Good work!')
  }

  // Replaces task at given index
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
    showAlert(true, 'edit', 'Task edited')
    setList(newList);
  }

  // Moves task from completed list  to todo list
  const readdTask = (index) => {
    setDoneList(doneList.filter((item, theIndex) => {
      if (index === theIndex) {
        setList(list.concat(item));
      }
      else {
        return item;
      }
    }))
    showAlert('true', 're-add', 'Readded task');
  };

  return (
    <div className="App">
      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      <div className="App-body">
        <Header size={list.length} />
        <div className="List">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <Task id={index} text={item} deleteTask={deleteTask} editTask={editTask} finishTask={finishTask} showAlert={showAlert}/>
              </div>
          )})}
        </div>
        <form onSubmit={addTask}>
          <span>
            <AddForm text={text} handleChange={(e) => setText(e.target.value)}/>
            <DoneList list={doneList} setList={setDoneList} readdTask={readdTask}/>
          </span>
        </form>
      </div>
    </div>
  );
}

export default ToDoList;
