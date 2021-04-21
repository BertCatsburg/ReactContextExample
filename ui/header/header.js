import React, {useContext} from 'react';
import {UserContext} from "lib/usercontext";

// *** UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {TabBar} from 'ui';
import {makeStyles} from '@material-ui/core/styles';
import {ShowName} from "ui";

const useStyles = makeStyles((theme) => ({
        appBarContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItem: 'center',
        },
        toolbar: theme.mixins.toolbar,
    })
);

export const Header = () => {

    const classes = useStyles();
    const userContext = useContext(UserContext);

    console.log('Header:userContext:',userContext);

    return (
        <AppBar className={classes.appBarContainer}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="body1">
                    React Context Test
                </Typography>
            </Toolbar>
            <TabBar/>
            <ShowName>{userContext.user}</ShowName>
        </AppBar>
    )
}