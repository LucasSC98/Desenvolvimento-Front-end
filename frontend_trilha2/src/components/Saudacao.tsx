import "./Saudacao.css";

type SaudacaoProps = {
  nome: string;
};

const Saudacao = ({ nome }: SaudacaoProps) => {
  return (
    <div className="saudacao-container">
      <p className="bemvindo">Bem vindo,</p>
      <p className="nome">{nome}</p>
    </div>
  );
};

export default Saudacao;
