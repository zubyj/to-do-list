import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

function InputField({value, handleSubmit, setText}) {
    return (
        <div>
            {/* Text input & submit btn */}
            <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            inputProps={{style: {color: "white"}}}
            InputLabelProps={{style: {color: "white"}}}
            label="Enter task" 
            variant="outlined"
            value={value}
            onChange={(e) => setText(e.target.value)}
            /> 
            <Button
                id="outlined-basic"
                variant="outlined"
                type="submit"
            >
                Submit
            </Button>
            </form>
        </div>
    )
}

export default InputField;