import React, { useState} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditForm from './EditForm'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

function Task({id, task, deleteTask}) {

    const [text, setText] = useState(task);
    const [isEdit, setIsEdit] = useState(false);

    if (isEdit) {
        return (
            <EditForm setText={setText} setIsEdit={setIsEdit}/>
        )
    }

    return (
        <div>

            {/* Task done (checkmark) button */}
            <IconButton
                aria-label="finish-task"
                onClick={() => deleteTask(id)}
            >
                <CheckBoxOutlineBlankOutlinedIcon className="Blank-checkbox-btn" />
            </IconButton>

            {/* Task text */}
            {text}

            {/* Edit Button */}
            <IconButton 
                aria-label="edit"
                onClick={() => setIsEdit(true)}
            >
            <EditOutlinedIcon className="Start-edit-btn"/> 
            </IconButton>

            {/* Delete button */}
            <IconButton 
                aria-label="delete"
                onClick={() => deleteTask(id)}
            >
            <DeleteOutlinedIcon className="Delete-btn"/>
            </IconButton>
        
        </div>




    )
}

export default Task;