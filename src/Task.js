import React, { useState} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

function Task({text}) {

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div>
            {/* Edit Button */}
            {text}
            <IconButton 
                aria-label="edit"
                onClick={() => setIsEdit(true)}
            >
            <EditOutlinedIcon className="edit-Btn"/> 
            </IconButton>
        

            {/* Delete button */}
            <IconButton 
                aria-label="delete"
            >
            <DeleteOutlinedIcon className="delete-Btn"/>
            </IconButton>
        
        
        </div>




    )
}

export default Task;