import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import UserHeaderNav from "../UserHeaderNav";

import "./styles.css";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTitle(location.pathname);
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className="userHeader">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default index;
