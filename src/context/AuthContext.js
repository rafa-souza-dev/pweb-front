import React, { createContext, useState, useEffect } from 'react';

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
        await fetch(`http://127.0.0.1:8081/api/usuario/email/${userEmail}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                if (data.id !== undefined) {
                    localStorage.setItem('id', data.id);
                    localStorage.setItem('nome', data.nome);
                    localStorage.setItem('altura', data.altura);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('genero', data.genero);
                    localStorage.setItem('pesoInicial', data.pesoInicial);
                    localStorage.setItem('pesoFinal', data.pesoFinal);
                    localStorage.setItem('dataInicial', data.dataInicial);
                    localStorage.setItem('dataFinal', data.dataFinal);
                }
            })

        setAuthenticated(true);
        history.push('/perfil');
        history.go();
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('id');
        localStorage.removeItem('nome');
        localStorage.removeItem('altura');
        localStorage.removeItem('email');
        localStorage.removeItem('genero');
        localStorage.removeItem('pesoInicial');
        localStorage.removeItem('pesoFinal');
        localStorage.removeItem('dataInicial');
        localStorage.removeItem('dataFinal');
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