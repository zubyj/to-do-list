import React, { useEffect } from 'react';

function Alert({type, msg, removeAlert}) {


    const getClassName = (type) => {
        switch (type) {
            case 'error': {
                return 'Alert-error'
            } 
            case 'add': {
                return 'Alert-add'
            }
            case 'delete': {
                return 'Alert-delete'
            }
            case 'done': {
                return 'Alert-done'
            }
            case 'edit' : {
                return 'Alert-add'
            } 
        }
    } 

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    })

    return (
        <div className='Alert'>
            <div className={getClassName(type)}>
                {msg}
            </div>
        </div>
    )
}

export default Alert;