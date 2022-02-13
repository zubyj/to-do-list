import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// Material UI impots
import TextField from '@mui/material/TextField'

function App() {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setList(list.concat(text));
    setText('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>To Do List</h1>
          <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="Enter task" 
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            /> 
          </form>
          {list.map((task) => {
            return (
              <div>
                <h3>{task}</h3>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
