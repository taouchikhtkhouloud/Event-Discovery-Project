
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Footer, Header, Slider, Fonct, Search } from './container';
import {  Navbar } from './components';
import data from './data';
import fct from './fonctionnalites';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Search />
      <Fonct data={fct}/>
      <Slider data = {data}/>
      <Footer />
      
    </div>
    
  </div>
  );
}

export default App;
