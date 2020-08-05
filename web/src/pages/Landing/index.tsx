import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo_true.svg';
import landingImg from '../../assets/images/landing2.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy English" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de Estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Dar Aulas
          </Link>
        </div>
        
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coracão Roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;