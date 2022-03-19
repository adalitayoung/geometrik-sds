import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout";

/**
 * ClientRoutes manages the system routing. Will return the first match so always keep the empty routes at the bottom
 */

function ClientRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Layout>
  );
}

export default ClientRoutes;
