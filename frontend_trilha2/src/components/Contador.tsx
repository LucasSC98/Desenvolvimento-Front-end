import { useState } from "react";
import Button from "../components/Button";
import "./Contador.css";

interface ContadorProps {
  valorInicial: number;
}

const Contador = ({ valorInicial }: ContadorProps) => {
  const [count, setContador] = useState<number>(valorInicial);

  const incrementar = () => {
    setContador(count + 1);
  };

  const decrementar = () => {
    setContador(count - 1);
  };

  return (
    <div>
      <h1 className="contador">Contador</h1>
      <h2 className="numero-contador">{count}</h2>
      <Button text="Incrementar" onClick={incrementar} />
      <Button text="Decrementar" onClick={decrementar} />
    </div>
  );
};

export default Contador;
