import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export function Task({ text, completed }) {
  return (
    <div className={completed ? 'task completed' : 'task'}>
      <div className="task__text">{text}</div>
      <div className="task__icon">
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
}
