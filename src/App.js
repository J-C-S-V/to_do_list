import './App.css';
import { Task } from './components/tasks.jsx';
import './css/tasks.css';
import { Form } from './components/form.jsx';
import './css/form.css';

function App() {
  return (
    <div className="app">
      <h1 className="app__header">To do list</h1>
      <main className="app__content">
        <Form />
        <Task text="Aprender React" />
      </main>
      <footer className="footer">
        <ul className="footer__ul">
          <li className="footer__li">All</li>
          <li className="footer__li">All</li>
          <li className="footer__li">All</li>
          <li className="footer__li">All</li>
          <li className="footer__li">All</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
