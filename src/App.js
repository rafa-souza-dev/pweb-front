import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import history from './history';
import CustomRoutes from './routes';

function App() {
    return (
      <AuthProvider>
        <BrowserRouter history={history}>
          <CustomRoutes />
        </BrowserRouter>
      </AuthProvider>
    );
};

export default App;
