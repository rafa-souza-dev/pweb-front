import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Perfil from './screens/Perfil';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/cadastro" 
                element={<Cadastro />}
            />
            <Route 
                path="/" 
                element={<Login />}
            />
            <Route 
                path="/perfil" 
                element={<Perfil />}
            />
        </Routes>
    );
};
