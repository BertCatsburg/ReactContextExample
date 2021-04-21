import React, {useState} from 'react';
import {UserContext} from "lib/usercontext";

// *** UI
import {Header} from "ui/header/header";
import 'fontsource-roboto';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
        toolbar: theme.mixins.toolbar,
    })
);
export const SetupUI = ({children}) => {

    const classes = useStyles();

    const [user, setUser] = useState('Bert');
    const [contextData, setContextData] = useState({user: user, setUser: setUserFunction})

    const setUserFunction = () => {
        setUser('Piet');
    }

    return (
        <UserContext.Provider value={contextData}>
            <Header/>
            <div className={classes.toolbar}/>
            {children}
        </UserContext.Provider>
    )
}