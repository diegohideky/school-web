import Router from "next/router";
import { createContext, useEffect, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }   

    const getToken = () => {
        return localStorage.getItem('token');
    }

    useEffect(() => {
        console.log('TESTTTT')
        if (!user) {
            Router.push('/login');
        }
    }, [user]);

    const value = useMemo(() => ({
        user, setUser, setToken, getToken
    }), [user]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}
