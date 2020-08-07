import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Inglês Britânico', label: 'Inglês Britânico' },
              { value: 'Inglês Americano', label: 'Inglês Americano' },
              { value: 'Inglês Instrumental', label: 'Inglês Instrumental' },
              { value: 'Inglês Conversação', label: 'Inglês Conversação' },
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da Semana" 
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input type="time" name="time" label="Hora" />

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