import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você que dar aulas"
        description="O primeiropasso é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name"/>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"/>
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp"/>
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;