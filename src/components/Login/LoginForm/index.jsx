import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../UserContext";

import Input from "../../Reusable/Input";
import Button from "../../Reusable/Button";
import Error from "../../../Help/Error";
import useForm from "../../../Hooks/useForm";

import "./styles.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" to="/login/criar">
          Cadastro
        </Link>
      </div>
      <Link className="perdeu" to="/login/perdeu">
        Perdeu a Senha?
      </Link>
    </section>
  );
};

export default LoginForm;
