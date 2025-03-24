import Contador from "./components/Contador";
import Saudacao from "./components/Saudacao";
import ListaTarefas from "./components/ListaTarefas";
import ToggleVisibilidade from "./components/ToggleVisibilidade";

export default function Home() {
  const tarefas = [
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Estudar TypeScript" },
    { id: 3, texto: "Estudar CSS" },
  ];
  return (
    <div>
      <Saudacao nome="Lucas" />
      <Contador valorInicial={0} />
      <ListaTarefas tarefasIniciais={tarefas} />
      <ToggleVisibilidade texto="Texto a ser escondido ou mostrado" />
    </div>
  );
}
