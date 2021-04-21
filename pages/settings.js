import React, {useContext} from 'react';
import {UserContext} from "lib/usercontext";

// *** UI
import {Header, Pagetitle, P, Button} from 'ui';


const Settings = () => {

    const userContext = useContext(UserContext);
    const {setUser} = userContext; // Here we take the function (setting the Thing) from the Context.

    // Simple ClickHandler
    const onButtonClickHandler = () => {
        // Here we use that function.
        setUser('Piet')
    };

    return (
        <React.Fragment>
            <Pagetitle>Settings</Pagetitle>
            <P>This is the Settings Page where you set a new Username</P>
            <Button action={onButtonClickHandler}>Set New Username</Button>

        </React.Fragment>
    )
}

export default Settings;
