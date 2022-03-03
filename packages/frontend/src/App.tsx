import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes/Router';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
