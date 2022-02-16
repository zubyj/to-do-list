import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Bloodtype } from '@mui/icons-material';

function AddTaskForm({text, handleChange}) {

    return (
        <div className="Add-task-form">
            {/* Change outline to trash red */}
            <TextField 
                id="outlined-basic" 
                inputProps={{style: {color: "black", height: "100%", width: "500px", border: '2px solid black', backgroundColor: "#A0554D", borderRadius: '10px'}}}
                InputLabelProps={{style: {color: "black", fontWeight: "bold"}}}
                label="Add task" 
                variant="outlined"
                value={text}
                onChange={handleChange}
            /> 
            <Button
                id="outlined-basic"
                variant="outlined"
                type="submit"
                style={{color: "black", fontWeight: "bold", height: "100%", backgroundColor: "#cfc0ab"}}
            >
                Save
            </Button>
        </div>
    )
}

export default AddTaskForm;