import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {TabBar} from 'ui';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
        appBarContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
        }
    })
);

export const Header = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBarContainer}>
            <Toolbar>React Context Test</Toolbar>
            <TabBar/>
        </AppBar>
    )
}