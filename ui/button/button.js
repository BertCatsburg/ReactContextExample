import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

export const Button = ({children, action}) => {
    return (
        <MuiButton variant="contained" color="primary" onClick={action}>{children}</MuiButton>
    )
}
