import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/cadastro" 
                element={<Cadastro />}
            />
            <Route 
                path="/login" 
                element={<Login />}
            />
        </Routes>
    );
};
