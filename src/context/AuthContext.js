import React, { createContext, useState, useEffect } from 'react';

import client from '../client/client.mjs';

import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = localStorage.getItem('id');

        if (id) {
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])

    async function handleLogin(userEmail) {
        const { data: { 
            id, nome, email,
            altura, genero, pesoInicial,
            pesoFinal, dataInicial, dataFinal
         } } = await
            fetch(`http://127.0.0.1:8081/api/usuario/email/${userEmail}`, {
                method: "GET"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

        localStorage.setItem('id', id);
        localStorage.setItem('nome', nome);
        localStorage.setItem('altura', altura);
        localStorage.setItem('email', email);
        localStorage.setItem('genero', genero);
        localStorage.setItem('pesoInicial', pesoInicial);
        localStorage.setItem('pesoFinal', pesoFinal);
        localStorage.setItem('dataInicial', dataInicial);
        localStorage.setItem('dataFinal', dataFinal);

        setAuthenticated(true);
        history.push('/home');
        history.go();
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.setItem('id');
        localStorage.setItem('nome');
        localStorage.setItem('altura');
        localStorage.setItem('email');
        localStorage.setItem('genero');
        localStorage.setItem('pesoInicial');
        localStorage.setItem('pesoFinal');
        localStorage.setItem('dataInicial');
        localStorage.setItem('dataFinal');
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