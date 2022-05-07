import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/login';
import Register from './pages/register';
import Evenement from './pages/evenement'
import About from './pages/about';
import Contact from './pages/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
          <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/evenement" element={<Evenement/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
