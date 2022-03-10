import React, { createContext, useState } from "react";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
}

interface IUserContext {
    user?: IUser;
    setUser?: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

const defaultState = {firstName:"Itay",lastName:"Leybovich",email:"Itayleybovich@gmail.com"}

export const UserContext = createContext<IUserContext>({});

export const UserProvider: React.FC = ({children}) => {
    const [user,setUser] = useState<IUser | undefined>();
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}