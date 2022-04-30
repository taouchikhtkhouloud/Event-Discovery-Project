import React from 'react';
import photo from '../../assets/images/Saly-15.png';

import './index.scss';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Découvrir les activités de plein air</h1>
      <p>
Publiez un événement  gratuitement ou inscrivez à des événements tous sur Event Discovery.</p>

      <div className="gpt3__header-content__input">
        
        <button type="button">Démarrer</button>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={photo} />
    </div>
  </div>
);

export default Header;