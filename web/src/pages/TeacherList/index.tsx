import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem 
          teacherName="Iana Sousa"
          description="Inglês Gramatical"
          avatar="https://avatars0.githubusercontent.com/u/17826996?s=460&u=3e971178c46afeaaf60874fb37542042ff6f0d75&v=4"
          priceClass="50,00"
        />
        <TeacherItem 
          teacherName="Marcos Spindola"
          description="Inglês Britânico"
          avatar="https://avatars.preply.com/i/logos/i/logos/avatar_8rfu7.jpg?d=160x160&f=webp"
          priceClass="55,00"
        />
        <TeacherItem 
          teacherName="Kéfera Martins"
          description="Conversação em Inglês"
          avatar="https://avatars.preply.com/i/logos/i/logos/avatar_lsyny.jpg?d=160x160&f=webp"
          priceClass="80,00"
        />
        <TeacherItem 
          teacherName="Mikaela Jonhson"
          description="Inglês"
          avatar="https://avatars.preply.com/i/logos/i/logos/avatar_wm016.jpg?d=160x160&f=webp"
          priceClass="65,00"
        />
        <TeacherItem 
          teacherName="John Neher"
          description="Inglês"
          avatar="https://avatars.preply.com/i/logos/i/logos/avatar_6q62j.jpg?d=160x160&f=webp"
          priceClass="59,00"
        />
      </main>

    </div>
  );
}

export default TeacherList;