import React from 'react';
import Task from './Task';

function List({list}) {
    return (
        <div>
            {list.map((task, index) => {
              return (
                <div>
                    <Task text={task} />
                </div>
            )})}
        </div>
    )
}

export default List;