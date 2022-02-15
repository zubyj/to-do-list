import React, { useState, useEffect } from 'react';

function Alert({type, msg, removeAlert}) {

    let msgColor = 'green'
    if (type === 'error') {
        // yelps red color
        msgColor = "#AF0606";
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    })

    return (
        <div>
            <p style={{backgroundColor: msgColor,  width: '100%', color: 'whitesmoke'}}>{msg}</p>
        </div>
    )
}

export default Alert;