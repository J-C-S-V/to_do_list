import React, { useState } from 'react';
import { Form } from '../components/form.jsx';
import { Task } from '../components/tasks.jsx';

export function Main() {
  const [task, setTask] = useState([]);

  const addTask = (task) => {
    console.log('task added');
    console.log('task');
  };

  return (
    <>
      <Form />
      <div className="tareas-lista-contenedor">
        {task.map(() => (
          <Task text={task.text} completed={task.completed} />
        ))}
      </div>
    </>
  );
}
