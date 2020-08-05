import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  teacherName: string;
  description: string;
  avatar: string;
  priceClass: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) =>{
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt={props.teacherName}/>
        <div>
          <strong>{props.teacherName}</strong>
          <span>{props.description}</span>
        </div>
      </header>

      <p>
        Fluente em inglês, ama aprender idiomas.
        <br/><br/>
        Gosta de tudo que envolve idiomas, aulas didáticas e com várias práticas de conversação. É gentil e bem didatico.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {props.priceClass}</strong>
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