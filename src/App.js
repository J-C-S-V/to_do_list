import { useState } from 'react';
import './App.css';
import { ListaDeTareas } from './components/ListaDeTareas.jsx';

function App() {
  const tareas = useState(0);
  console.log(tareas);

  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
