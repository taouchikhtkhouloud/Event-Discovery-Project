import { Footer, Header, Slider, Fonct, Search } from '../container';
import {  Navbar } from '../components';
import data from '../data';
import fct from '../fonctionnalites'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    return (
        <div className="gradient__bg">
     
        <Header />
        <Search />
        <Fonct data={fct}/>
        <Slider data = {data}/>
       
        
      </div>

    )
};

export default Home;