import { useState } from "react";
import "./ToggleVisibilidade.css";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade = ({ texto }: ToggleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState(false);

  const toggleVisibilidade = () => {
    setVisivel(!visivel);
  };
  return (
    <div className="toggle-container">
      <button onClick={toggleVisibilidade}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      <p className={`texto ${visivel ? "visivel" : "invisivel"}`}>{texto}</p>
    </div>
  );
};

export default ToggleVisibilidade;
