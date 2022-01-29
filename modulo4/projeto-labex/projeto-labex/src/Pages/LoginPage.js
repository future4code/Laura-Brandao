import axios from "axios";
import react from "react";
import { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../Utils/Constants";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const onChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const onChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const resetInput = () => {
      setEmail("");
      setPassword("")
  }

  const onSubmitLogin = () => {
    axios.post(`${BASE_URL}/login`, {
      email,
      password,
    }).then(({ data }) => {
        localStorage.setItem("tolken", data.token);
        console.log(data)
    }).catch((err) => { console.log (err)})
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="E-mail" value={email} onChange={onChangeEmail} />
      <input placeholder="Senha" value={password} onChange={onChangePassword} />
      <button>Voltar</button>
      <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
