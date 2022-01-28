import axios from "axios";
import react from "react";
import { useState } from "react";
import styled from "styled-components";

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button>Voltar</button>
            <button>Entrar</button>

        </div>
    )
}

export default LoginPage