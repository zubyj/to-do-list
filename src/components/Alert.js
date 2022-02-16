import { BloodtypeOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';

function Alert({type, msg, removeAlert}) {

    let msgColor = 'light-blue'
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
            <p style={{color: msgColor,  width: '100%', fontWeight: 'bold'}}>{msg}</p>
        </div>
    )
}

export default Alert;