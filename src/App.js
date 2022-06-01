import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import CustomRoutes from './routes';

function App() {
    return (
      <BrowserRouter>
          <CustomRoutes />
      </BrowserRouter>
    );
};

export default App;
