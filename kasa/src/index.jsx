import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/style.css';
import Home from './pages/Home/index';
import Apropos from './pages/A-propos/index';
import Logement from './pages/Logement/index'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/a-propos" element={<Apropos />} />
        <Route exact path="/logement/:logementId" element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
    <Footer />

  </Router>
</React.StrictMode>
);


