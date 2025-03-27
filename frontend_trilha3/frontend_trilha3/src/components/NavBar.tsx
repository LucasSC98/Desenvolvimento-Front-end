import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const animals = ["cachorro", "gato", "papagaio", "hamster", "coelho"];

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Animais
          </button>
          {showDropdown && (
            <ul className="dropdown-content">
              {animals.map((animal) => (
                <li key={animal}>
                  <Link
                    to={`/animal/${animal}`}
                    onClick={() => setShowDropdown(false)}
                  >
                    {animal.charAt(0).toUpperCase() + animal.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
