import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

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
                    size="small"
                    onChange={handleChange}
                /> 
            </div>
            <div>
                <Button
                    className="Save-btn"
                    variant="filled"
                    type="contained"
                >
                    Save Task
                </Button>
            </div>
        </div>
    )
}

export default AddForm;