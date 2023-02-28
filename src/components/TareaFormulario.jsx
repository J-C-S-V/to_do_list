export function TareaFormulario(props) {
  return (
    <form className="tarea-formulario">
      <input
        type="tarea-input"
        typeof="text"
        placeholder="Escribe algo"
        name="texto"
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}
