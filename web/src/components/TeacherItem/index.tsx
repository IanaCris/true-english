import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () =>{
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/17826996?s=460&u=3e971178c46afeaaf60874fb37542042ff6f0d75&v=4" alt="Iana Sousa"/>
        <div>
          <strong>Iana Sousa</strong>
          <span>Espanhol</span>
        </div>
      </header>

      <p>
        Fluente em espanhol, ama aprender idiomas.
        <br/><br/>
        Gosta de tudo que envolve idiomas, aprendeu muito com a expericncia como missionária na Argentina. É gentil e bem humorada.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;