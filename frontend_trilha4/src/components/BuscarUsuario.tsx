import { useState } from "react";
import api from "../services/api"; 
import "./BuscarUsuario.css";

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    setErro("");
    setUsuario(null);

    if (!id) {
      setErro("Por favor, insira um ID.");
      return;
    }

    try {
      const response = await api.get(`/users/${id}`);
      setUsuario({ name: response.data.name, email: response.data.email });
    } catch (error: unknown) {
      if (error instanceof Error && (error as { response?: { status: number } }).response?.status === 404) {
        setErro("Usuário não encontrado.");
      } else {
        setErro("Erro ao buscar usuário.");
      }
    }
  };

  return (
    <div className="buscar-usuario-container">
      <h1>Buscar Usuário</h1>
      <input
        type="text"
        placeholder="Digite o ID do usuário"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="buscar-usuario-input"
      />
      <button onClick={buscarUsuario} className="buscar-usuario-botao">
        Buscar
      </button>
      {erro && <p className="buscar-usuario-erro">{erro}</p>}
      {usuario && (
        <div className="buscar-usuario-dados">
          <h2>Dados do Usuário</h2>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;