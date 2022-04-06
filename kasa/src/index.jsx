import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/index';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'
// import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
  <Router>
   
        {/* <GlobalStyle /> */}
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        
        {/* <Route path="/survey/:questionNumber" element={<Survey />} /> */}
          

        {/* <Route path="/results" element={<Results />} /> */}
          

        {/* <Route path="/freelances" element={<Freelances />} /> */}
          
        <Route element={<Error />} />
        </Routes>
        <Footer />

  </Router>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
