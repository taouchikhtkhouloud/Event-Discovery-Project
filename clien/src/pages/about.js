import { useEffect, useState } from 'react'
import event from '../assets/images/Event.png'
import {
    faFacebook,
    faTwitter,
    faDiscord,
  faInstagram,
  faGooglePlay,
  faLinkedin,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../container/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import SliderEquipe from '../container/SliderEquipe'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
       
          <h1 className='titre'>Engagez des événements en personne, virtuels et hybrides </h1>
          <p>
          Event discovery est la principale plateforme de gestion et de croissance d'événements qui aide les créateurs et les entrepreneurs à prospérer
          </p>
          <h1 className='titre'>Suivez-nous sur: </h1>
            <h1 className='titre'>Nous croyons au pouvoir transformateur des événements</h1>
          <div className='whyevent'>

          <p >
          Nous sommes passionnés d'aider nos utilisateurs à générer un impact audacieux et à développer leurs activités en créant des expériences que les gens aiment et dont ils se souviennent.
          </p>
         <img src={event} alt='' ></img>
          </div>
          <h1 className='titre'>NOTRE ÉQUIPE</h1>
          <SliderEquipe/>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFacebook} color="#000bdd" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faTwitter} color="#000bdd" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDiscord} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faInstagram} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faYoutubeSquare} color="#ef511d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={  faLinkedin} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default About