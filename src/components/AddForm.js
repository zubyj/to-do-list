import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Bloodtype } from '@mui/icons-material';

function AddForm({text, handleChange}) {

    return (
        <div className="Add-form">
            <div>
                {/* Change outline to trash red */}
                <TextField 
                    id="outlined-basic" 
                    className="Add-form-input"
                    label="Add task" 
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                /> 
            </div>
            <div>
                <Button
                    variant="filled"
                    type="contained"
                    className="Save-btn"
                >
                    Save Task
                </Button>
            </div>
        </div>
    )
}

export default AddForm;