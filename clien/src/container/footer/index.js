import React from 'react';
import Logo from '../../assets/images/logopfa.png'
import Icon from '../../components/Icons'
import './index.scss';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Trouvez des choses à faire dans votre région ou publiez un événement aujourd'hui </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Commencer</p>
    </div>
    
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Événements en ligne</p>
        <p> Calendrier</p>
        <p>Compte</p>
        <p>Aide</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Event discovery</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Nous suivre</h4>
        <p><Icon className="fab fa-facebook-f" />Facebook</p>
        <p><Icon className="fab fa-instagram" />Instagram</p>
        <p><Icon className="fab fa-twitter" />Twitter</p>
        <p><Icon className="fab fa-youtube" />Youtube</p>
    
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Event discovery. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;