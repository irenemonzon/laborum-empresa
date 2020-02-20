import React from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../states/provider';

const ApplicantJob = () => {
  const [myState, dispatch] = useMyContext();
  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <p>Requisitos del Postulante</p>
      <label>Nombre del título o profesión</label>
      <input
        type="text"
        name="profession"
        onChange={onChange}
      />

      <label>Experiencia Mínima</label>
      <input
        type="text"
        name="minExperience"
        onChange={onChange}
      />
      <label>Manejo de herramientas o sotfware</label>
      <input
        type="text"
        name="toolManagement"
        onChange={onChange}
      />
      <p>¿Qué esperas del postulante?</p>
      <label>Describe las aptitudes del postulante</label>
      <input
        type="text"
        name="expectations"
        onChange={onChange}
      />
      <p>Preguntas Adicionales</p>
      <label>Pregunta sin título</label>
      <input
        type="text"
        name="question1"
        onChange={onChange}
      />

      <p>Tipo de Respuesta</p>
      <label>Elige tipo de respuesta</label>
      <input
        type="text"
        name="typeAnswer"
        onChange={onChange}
      />
      <Link to="/" className="btn-back">Atrás</Link>
      <Link to="/DateRangeJob">Siguiente</Link>
    </div>

  );
};

export default ApplicantJob;
