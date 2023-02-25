import React from 'react';

export function Form() {
  return (
    <form className="form">
      {' '}
      {/* Block */}
      <ul className="form__ul">
        <li className="form__li">
          <input placeholder="Enter your task" type="text" />
        </li>
        <li>
          <button type="submit">Add</button>
        </li>
      </ul>
    </form>
  );
}
