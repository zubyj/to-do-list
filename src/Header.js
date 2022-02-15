import React from 'react';

function Header({size}) {
    return (
        <div className="Title">
            To Do List
            <span style={{color: "green", paddingLeft: '20px'}}>
            [ {size === 0 ? 'Done' : size} ]
            </span>
        </div>
    )
}

export default Header;