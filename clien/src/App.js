
import './App.scss';
import Layout from './components/Layout';
import { Footer, Header, Slider, Fonct, Search } from './container';
import {  Navbar } from './components';
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Evenement from './pages/evenement';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";

 

function App() {
  return (
    
    <div className='app'>
      <Navbar></Navbar>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/evenement" element={<Evenement/>} />
    </Routes>
    <Footer></Footer>
    </div>
      
    
    
    
  
  );
}

export default App;
