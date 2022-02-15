import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

function InputField({list, setList}) {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setList(list.concat(text));
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic" 
                inputProps={{style: {color: "white"}}}
                InputLabelProps={{style: {color: "white"}}}
                label="Enter task" 
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                /> 
                <Button
                    id="outlined-basic"
                    variant="outlined"
                    type="submit"
                    style={{color: "white"}}
                >
                    Save
                </Button>
            </form>
        </div>
    )
}

export default InputField;