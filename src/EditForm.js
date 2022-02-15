import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function EditForm({id, setIsEdit, editTask}) {

    const [editText, setEditText] = useState('');

    const submitEdit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        editTask(id, editText);
    }

    return (
        <span>
            <form onSubmit={submitEdit}>
                <TextField 
                    id="outlined-basic" 
                    inputProps={{style: {color: "white"}}}
                    InputLabelProps={{style: {color: "white"}}}
                    label="Write new task"
                    variant="outlined"
                    onChange={(e) => setEditText(e.target.value)}
                /> 
                <IconButton
                    aria-label="submit-edit"
                    type="submit"
                >
                <DoneOutlineOutlinedIcon className="Done-edit-btn"/>
                </IconButton>

                <IconButton
                    aria-label="submit-edit"
                    onClick={() => setIsEdit(false)}
                >
                    <CancelOutlinedIcon className="Undo-edit-btn"/>
                </IconButton>
            </form>
        </span>        

    );
}

export default EditForm;