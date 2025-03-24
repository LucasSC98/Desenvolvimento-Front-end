import { useState, ChangeEvent } from "react";
import "./ListaTarefas.css";

interface Tarefa {
  id: number;
  texto: string;
}

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[];
}

const ListaTarefas = ({ tarefasIniciais }: ListaTarefasProps) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(event.target.value);
  };

  const adicionarTarefa = () => {
    const novaTarefaObj = {
      id: tarefas.length + 1,
      texto: novaTarefa,
    };
    setTarefas([...tarefas, novaTarefaObj]);
    setNovaTarefa("");
  };

  return (
    <div className="lista-tarefas">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input type="text" value={novaTarefa} onChange={handleChange} />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
