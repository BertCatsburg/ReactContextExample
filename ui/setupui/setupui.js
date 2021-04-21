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

    // Handling of the data is done where the Provider resides.
    // In this case, simple useState
    const [user, setUser] = useState('Bert');

    // Both Thing and the function that sets the Thing are passed to the Provider in value.
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Header/>
            <div className={classes.toolbar}/>
            {children}
        </UserContext.Provider>
    )
}
