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
                variant="outlined"
                type="submit"
                style={{color: "white", backgroundColor: "black"}}
                onClick={() => setShowList(!showList)}
            >
                <span style={{fontWeight: "bold"}}>
                    COMPLETED <span style={{color: "green"}}>({list.length})</span>
                </span>
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
                            <div key={index} className="Task">
                                <IconButton 
                                    aria-label="undo-done"
                                    onClick={() => readdTask(index)}
                                >
                                    <CheckBoxOutlinedIcon className="Checkbox-btn"/>
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
                        variant="outlined"
                        style={{color: "#FFBABA"}}
                        onClick={() => setList([])}
                        >
                        Clear Completed
                    </Button>
                }
  
            </div>
        )
    }

    return (
        <div>
            {showListBtn()}
            {showList && getList()}
        </div>
    )
}

export default DoneList;