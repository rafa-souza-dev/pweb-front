import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Perfil from './screens/Perfil';

const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("id") !== null;
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const PrivateRouteLogged = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("id") !== null;
    return isAuthenticated ? <Navigate to={redirectTo} /> : children
}

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/cadastro" 
                element={
                    <PrivateRouteLogged redirectTo={"/"}>
                        <Cadastro />
                    </PrivateRouteLogged>
                }
            />
            <Route 
                path="/" 
                element={
                    <PrivateRouteLogged redirectTo={"/"}>
                        <Login />
                    </PrivateRouteLogged>
                }
            />
            <Route 
                path="/perfil" 
                element={
                    <PrivateRoute redirectTo={"/"}>
                        <Perfil />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};
