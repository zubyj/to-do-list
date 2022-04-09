import React from 'react';

function Header({size}) {
    return (
        <header>
            <span className="Title"> 
                <h1>To Do List 
                    <span className="Title-count">
                        [ {size === 0 ? 'Done' : size} ]
                    </span>
                </h1>
            </span>
        </header>
    )
}

export default Header;