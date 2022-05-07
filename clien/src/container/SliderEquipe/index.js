import React, { Component } from "react";
import Slider from "react-slick";
import solver from '../../assets/images/solver.jpeg'
import performer from '../../assets/images/performer.jpg'
import multi from '../../assets/images/multi.jpg'
import './index.scss'

export default class SliderEquipe extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <p>Nos obligations vont au-delà de nos produits et services. Nous nous engageons entièrement à simplifier le travail de nos utilisateurs et envisageons de nouvelles technologies pour une meilleure analyse des données et une meilleure gestion des événements.</p>
        <Slider {...settings}>
          <div className="container">
              <img  className="o" src={solver} alt=''></img>
              <h1 >Résolveurs de problèmes </h1>
              <p className="text">L'expertise de notre équipe s'articule autour d'une croissance constante, d'approches créatives et de nouvelles façons de résoudre les problèmes.</p>
        
          </div>
          <div className="container">
              <img className="o" src={performer} alt=''></img>

              <h1>Performants</h1>
              <p className="text">Nous travaillons chaque jour pour construire et favoriser un environnement convivial pour les nouvelles idées qui promettent d'améliorer positivement l'industrie de l'événementiel.</p>
            
          </div>
          <div className="container">
          <img className="o" src={multi} alt=''></img>
          <h1>Compétences multidisciplinaires</h1>
          <p className="text">Notre équipe aux multiples talents apprend en permanence et investit du temps dans le développement de nouvelles capacités pour mieux servir à la fois nos utilisateurs et l'industrie de l'événementiel.</p>
            
          </div>
          
        </Slider>
      </div>
    );
  }
}