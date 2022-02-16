import { BloodtypeOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';

function Alert({type, msg, removeAlert}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    })

    return (
        <div className="Alert-msg">
            <p>{msg}</p>
        </div>
    )
}

export default Alert;