import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Header({size}) {
    return (
        <div>
            <div><MenuBookIcon style={{fontSize:60}} className="Title-icon"/></div>
            <span className="Title"> 
                <h1>To Do List 
                    <span className="Title-count">
                        [ {size === 0 ? 'Done' : size} ]
                    </span>
                </h1>
            </span>

        </div>
    )
}

export default Header;