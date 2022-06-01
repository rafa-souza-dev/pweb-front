import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './screens/Cadastro';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/cadastro" 
                element={<Cadastro />}
            />
        </Routes>
    );
};
