import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

export const Button = ({children, action, label}) => {
    return (
        <MuiButton>{label}</MuiButton>
    )
}
