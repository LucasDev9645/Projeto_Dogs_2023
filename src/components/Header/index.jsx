import { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { UserContext } from "../../UserContext";

import "./styles.css";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
