import React from 'react';

function Header({size}) {

    const doneHeader = <span className="Done-header">Done</span>
    const numTasksHeader = <span className="Num-tasks-header">[ {size} ]</span>

    return (
        <header>
            <h1 className="Title">To Do List
                <span className="Tasks-header">
                    {size === 0 ? doneHeader : numTasksHeader}
                </span>
            </h1>
        </header>
    )
}

export default Header;