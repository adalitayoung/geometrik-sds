import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Register from './pages/register';
import Layout from './components/layout';

/**
 * ClientRoutes manages the system routing. Will return the first match so always keep the empty routes at the bottom
 */
function ClientRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<App />} />
            </Routes>
          
        </Layout>
        
    ) 
}

export default ClientRoutes