import React from 'react';

export const UserContext = React.createContext({
    user: 'Bert',
    setUser: () => {}
});