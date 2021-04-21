import React, {useContext} from 'react';
import {UserContext} from "lib/usercontext";

// *** UI
import {Header, Pagetitle, P, Button} from 'ui';


const Settings = () => {

    const userContext = useContext(UserContext);
    console.log('Settings:userContext:',userContext);

    const setNewUsername = () => {
        console.log('Button Clicked!!!');
    }

    return (
        <React.Fragment>
            <Pagetitle>Settings</Pagetitle>
            <P>This is the Settings Page where you set a new Username</P>
            <Button action={setNewUsername}>Set New Username</Button>

        </React.Fragment>
    )
}

export default Settings;
