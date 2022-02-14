import React, { useState} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

// the key is index
const Task = ({id, text, deleteTask, editTask}) => {
    
    const [isEdit, setIsEdit] = useState(false);
    const [editTaskText, setEditTaskText] = useState('');

    const doneEdit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        editTask(id, editTaskText);
    }

    if (isEdit) {
        return (
            <div>
                <form onSubmit={doneEdit}>
                    <input type="text" onChange={(e) => setEditTaskText(e.target.value)}/>
                    <IconButton 
                        aria-label="done edit"
                        type="submit"
                    >
                        <DoneOutlineOutlinedIcon className="done-Edit-Btn" />
                    </IconButton>
                </form>
            </div>
        );
    }

    return (
        <div>
            <span>{text}</span>
            {/* Edit button */}
            <IconButton 
                aria-label="edit"
                onClick={() => setIsEdit(true)}
            >
                <EditOutlinedIcon className="edit-Btn"/> 
            </IconButton>


            {/* Delete button */}
            <IconButton 
                aria-label="delete"
                onClick={() => deleteTask(id)}
            >
                <DeleteOutlinedIcon className="delete-Btn"/>
            </IconButton>
        </div>
    )
}

export default Task;