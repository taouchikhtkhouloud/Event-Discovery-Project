
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Footer, Header } from './container';
import {  Navbar } from './components';
function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Footer />
    </div>
    
  </div>
  );
}

export default App;
