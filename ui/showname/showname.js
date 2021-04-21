import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        boxContainer: {
            display: 'flex',
            alignItems:'center',
            marginRight: 20
        }
    })
);

export const ShowName = ({children}) => {
    const classes = useStyles();

    return (
        <Box className={classes.boxContainer}>
            <Typography as="body1">{children}</Typography>
        </Box>
    )
}