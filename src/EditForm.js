import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

function EditForm({setText, setIsEdit}) {

    const submitEdit = (e) => {
        e.preventDefault();
        setIsEdit(false);
    }

    return (
        <form onSubmit={submitEdit}>
            <TextField 
                id="outlined-basic" 
                inputProps={{style: {color: "white"}}}
                InputLabelProps={{style: {color: "white"}}}
                label="Edit task"
                variant="outlined"
                onChange={(e) => setText(e.target.value)}
            /> 
            <IconButton
                aria-label="submit-edit"
                type="submit"
            >
            <DoneOutlineOutlinedIcon className="Submit-edit"/>
            </IconButton>
        </form>
    );
}

export default EditForm;