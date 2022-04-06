import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/style.css';
import Home from './pages/Home/index';
import Apropos from './pages/A-propos/index';

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'
// import GlobalStyle from './utils/style/GlobalStyle'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App tab="home" />);

root.render(
  <React.StrictMode>
  <Router>
   
        {/* <GlobalStyle /> */}
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/a-propos" element={<Apropos />} />
        
        {/* <Route path="/survey/:questionNumber" element={<Survey />} /> */}
          

        {/* <Route path="/results" element={<Results />} /> */}
          

        {/* <Route path="/freelances" element={<Freelances />} /> */}
          
        <Route element={<Error />} />
        </Routes>
        <Footer />

  </Router>
</React.StrictMode>
);


