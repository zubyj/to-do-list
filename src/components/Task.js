import React, { useState} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditForm from './EditForm'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

function Task({id, text, deleteTask, editTask, finishTask, showAlert}) {

    const [isEdit, setIsEdit] = useState(false);

    if (isEdit) {
        return (
            <EditForm id={id} text={text} editTask={editTask} setIsEdit={setIsEdit} showAlert={showAlert}/>
        )
    }

    return (
        <div className="Task">
            {/* Complete button */}
            <IconButton
                aria-label="finish-task"
                onClick={() => finishTask(id)}
            >
                <CheckBoxOutlineBlankOutlinedIcon className="Checkbox-btn" />
            </IconButton>

            <span className="Task-text">{text}</span>

            {/* Edit Button */}
            <IconButton 
                aria-label="edit"
                onClick={() => setIsEdit(true)}
            >
            <EditOutlinedIcon className="Edit-btn"/> 
            </IconButton>

            {/* Delete button */}
            <IconButton 
                aria-label="delete"
                onClick={() => {
                    deleteTask(id);
                    showAlert(true, 'success', 'Task deleted')
                }}
            >
                <DeleteOutlinedIcon className="Delete-btn"/>
            </IconButton>

        </div>




    )
}

export default Task;