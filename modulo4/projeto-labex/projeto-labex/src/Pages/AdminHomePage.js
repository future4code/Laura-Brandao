import axios from "axios";
import react from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function AdminHomePage() {

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    return (
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}

export default AdminHomePage