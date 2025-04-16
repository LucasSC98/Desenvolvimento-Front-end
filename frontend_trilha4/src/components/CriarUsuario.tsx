import { useState } from "react";
import api from "../services/api";
import "./CriarUsuario.css";

const CriarUsuario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    if (!formData.name || !formData.email) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await api.post("/users", formData);
      setMensagem("Usuário cadastrado com sucesso!");
      setFormData({ name: "", email: "" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          "Erro ao cadastrar seu usuario.";
      setErro(errorMessage);
    }
  };

  return (
    <div className="criar-usuario-container">
      <h1>Cadastrar Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do usuário"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="criar-usuario-input"
        />
        <input
          type="email"
          placeholder="E-mail do usuário"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="criar-usuario-input"
        />
        <button type="submit" className="criar-usuario-botao">
          Cadastrar
        </button>
      </form>
      {mensagem && <p className="criar-usuario-sucesso">{mensagem}</p>}
      {erro && <p className="criar-usuario-erro">{erro}</p>}
    </div>
  );
};

export default CriarUsuario;
