import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export function Tarea({ texto, completada, id, taskCompleted, taskDeleted }) {
  return (
    <div
      className={
        completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}
