import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Button from '@mui/material/Button';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

function DoneList({list, setList, readdTask}) {

    const [showList, setShowList] = useState(false);

    const showListBtn = () => {
        return (
            <Button
                id="outlined-basic"
                variant="contained"
                type="submit"
                className="Toggle-done-list-btn"
                onClick={() => setShowList(!showList)}
            >
                Completed tasks <span style={{color: "darkblue"}}>({list.length})</span>
                {showList ? <ExpandLessOutlinedIcon/> : <ExpandMoreOutlinedIcon/>}
            </Button>
        )
    }

    const getList = () => {
        return (
            <div className="List">
                {
                list.map((task, index) => {
                    return (
                        <div key={index} className="Task Done-task">
                            <IconButton 
                                aria-label="undo-done"
                                onClick={() => readdTask(index)}
                            >
                                <CheckBoxOutlinedIcon className="Undo-done-btn"/>
                            </IconButton>
                            <span className="Task-text">
                                {task}
                            </span>
                        </div>
                    )
                })
                }

                {list.length > 0 &&
                    <Button
                        id="outlined-basic"
                        variant="contained"
                        color="error"
                        className="Clear-btn"
                        onClick={() => setList([])}
                        >
                        Clear Finished
                    </Button>
                }
  
            </div>
        )
    }

    if (list.length < 1) {
        return <div></div>
    }

    return (
        <div>
            {showListBtn()}
            {showList && getList()}
        </div>
    )
}

export default DoneList;