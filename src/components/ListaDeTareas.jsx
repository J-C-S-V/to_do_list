import React, { useState } from 'react';
import { TareaFormulario } from './TareaFormulario.jsx';
import '../css/ListaDeTareas.css';

export function ListaDeTareas() {
  return (
    <React.Fragment>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">LISTA DE TAREAS</div>
    </React.Fragment>
  );
}
