import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
