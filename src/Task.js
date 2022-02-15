import React, { useState} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditForm from './EditForm'

function Task({id, task, deleteTask}) {

    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(task);


    if (isEdit) {
        return (
            <EditForm setText={setText} setIsEdit={setIsEdit}/>
        )
    }

    return (
        <div>
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