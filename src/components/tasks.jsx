import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export function Task({ text, completed, id, taskCompleted, taskDeleted }) {
  return (
    <div className={completed ? 'task completed' : 'task'}>
      <div onClick={() => taskCompleted(id)} className="task__text">
        {text}
      </div>
      <div onClick={() => taskDeleted(id)} className="task__icon">
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
}
