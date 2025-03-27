import { useParams } from "react-router-dom";
import "./Animal.css";

const Animal = () => {
  const { name } = useParams();

  return (
    <div className="container">
      <h1>Pagina de Animais</h1>
      <p>
        Esse é o animal: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Animal;
