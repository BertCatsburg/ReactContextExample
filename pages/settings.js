import React, {useContext} from 'react';
import {UserContext} from "lib/usercontext";

// *** UI
import {Header} from 'ui';


const Settings = () => {

    const userContext = useContext(UserContext);

    console.log();   // TODO   HIER GEBLEVEN.
    return (
        <React.Fragment>
            <h1>Settings</h1>


        </React.Fragment>
    )
}

export default Settings;
