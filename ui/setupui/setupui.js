import React from 'react';
import {Header} from "ui/header/header";
import {UserContext} from "lib/usercontext";

export const SetupUI = ({children}) => {
    return (
            <UserContext.Provider>
                <Header/>
                {children}
            </UserContext.Provider>
    )
}