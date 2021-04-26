import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return (
    <ul>
      {tarefas.map((tarefa) => <li>{tarefa}</li>)}
      <li>{task('Almoçar')}</li>
    </ul>
  )
}

export default App;
