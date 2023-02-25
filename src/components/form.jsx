import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Form() {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {};

  const manejarEnvio = (e) => {
    const tareaNueva = {
      id: '1',
      texto: { text },
    };
  };

  return (
    <form className="form">
      {' '}
      {/* Block */}
      <ul className="form__ul">
        <li className="form__li">
          <input
            className="form__input"
            placeholder="Enter your task"
            type="text"
          />
        </li>
        <li>
          <button className="form__button" type="submit">
            Add
          </button>
        </li>
      </ul>
    </form>
  );
}
