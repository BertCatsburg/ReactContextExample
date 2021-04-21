import React, {useState} from 'react';
import {Header} from "ui/header/header";
import {UserContext} from "lib/usercontext";

// *** UI
import 'fontsource-roboto';

export const SetupUI = ({children}) => {

    const [user, setUser] = useState('Bert');
    const [contextData, setContextData] = useState({user: user, setUser: setUserFunction})

    const setUserFunction = () => {
        setUser('Piet');
    }

    return (
            <UserContext.Provider value={contextData}>
                <Header/>
                {children}
            </UserContext.Provider>
    )
}