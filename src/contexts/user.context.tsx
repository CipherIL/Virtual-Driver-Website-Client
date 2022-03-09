import React, { createContext, useState } from "react";

interface User {
    firstName: string,
    lastName: string,
    email: string,
}

interface IUserContext {
    user?: User;
    setUser?: React.Dispatch<React.SetStateAction<User>> | React.Dispatch<React.SetStateAction<undefined>>;
}

const defaultState = {firstName:"Itay",lastName:"Leybovich",email:"Itayleybovich@gmail.com"}

export const UserContext = createContext<IUserContext> ({});

export const UserProvider: React.FC = ({children}) => {
    const [user,setUser] = useState();
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}