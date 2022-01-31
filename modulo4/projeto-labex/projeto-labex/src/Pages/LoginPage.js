import axios from "axios";
import react from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../Utils/Constants";
import { setToken, getToken } from "../Utils/localStorage";
import useForm from "../hooks/useForm";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4vh;
  form {
    display: flex;
    flex-direction: column;
    width: 60vw;
    select {
      height: 5vh;
      margin: 5px;
      border-radius: 10px;
    }
    input {
      height: 5vh;
      margin: 5px;
      border-radius: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 20px 0 10px 0;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: #948e99;
  :hover {
    background-color: #51425f;
  }
`;

function LoginPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  if (getToken()) {
    history.push("/admin/trips/list");
  }

  const { form, onChange } = useForm({
    email: "laura@gmail.com.br",
    password: "123456",
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/login`, form)
      .then(({ data }) => {
        setToken(data.token);
        console.log(data);
        history.push("admin/trips/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <h1>Login</h1>
      <Container>
        <form onSubmit={onSubmitLogin}>
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={"email"}
            m="3"
            type={"email"}
            required
            color="white"
          />
          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"senha"}
            m="3"
            pattern={"^.{6,}"}
            title={"A senha deve conter no mínimo 6 caracteres"}
            type={"password"}
            required
            color="white"
          />
        </form>
      </Container>
      <ButtonContainer>
        <Button onClick={goBack}>Voltar</Button>
        <Button type="submit" onClick={onSubmitLogin}>
          Entrar
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
}

export default LoginPage;
