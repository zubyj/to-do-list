import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

function AddTaskForm({text, handleChange}) {

    return (
        <div className="Add-task-form">
            <TextField 
                id="outlined-basic" 
                inputProps={{style: {color: "white", height: "100%", width: "500px"}}}
                InputLabelProps={{style: {color: "white"}}}
                label="Enter task" 
                variant="outlined"
                value={text}
                onChange={handleChange}
            /> 
            <Button
                id="outlined-basic"
                variant="outlined"
                type="submit"
                style={{color: "white", height: "100%"}}
            >
                Save
            </Button>
        </div>
    )
}

export default AddTaskForm;