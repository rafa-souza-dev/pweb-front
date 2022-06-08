import React, { createContext, useState, useEffect } from 'react';

import client from '../client/client.mjs';

import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const access = localStorage.getItem('access');

        if (access) {
            client.defaults.headers.Authorization = "Bearer " + access;
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])

    async function handleLogin(user) {
        const { data: { access, refresh } } = await client
            .post('api/token/', {
                email: user.email,
                password: user.password
            })

        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);

        client.defaults.headers.Authorization = "Bearer " + access;
        setAuthenticated(true);
        history.push('/home');
        history.go();
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('access');
        client.defaults.headers.Authorization = undefined;
        history.push('/');
        history.go();
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };