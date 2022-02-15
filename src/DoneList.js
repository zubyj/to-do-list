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
                style={{color: "white"}}
                onClick={() => setShowList(!showList)}
            >
                Completed <span style={{color: "green"}}>({list.length})</span>
                {showList ? <ExpandLessOutlinedIcon/> : <ExpandMoreOutlinedIcon/>}
            </Button>
        )
    }

    const getList = () => {
        return (
            <div>
                {
                    list.map((task, index) => {
                        return (
                            <div key={index}>
                                <IconButton 
                                    aria-label="undo-done"
                                    onClick={() => readdTask(index)}
                                >
                                    <CheckBoxOutlinedIcon className="Checkbox-btn"/>
                                </IconButton>
                                <span className="Completed-task">
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
                        Clear
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