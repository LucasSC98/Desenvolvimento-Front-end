import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo</h1>

        <button className="nav-button" onClick={handleNavigateToAbout}>
          Ir para Sobre
        </button>
        <Link className="nav-link" to="/rooms">
          Quartos Disponíveis
        </Link>
      </div>
    </div>
  );
};

export default Home;
