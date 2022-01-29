import { getActiveElement } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../Utils/Constants";
import { useHistory } from "react-router-dom";

function TripsDetailsPage() {

    const history = useHistory()
    const goToLogin = () => {
        history.push ("/login")
    }
    const { id } = useParams()
    const [trip, setTrip] = useState(undefined)

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`${BASE_URL}/trip/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            console.log(data)
            setTrip(data)
        }
        const token = localStorage.getItem("token")
        if("token") fetch()
        else goToLogin()
    }, [])

    return (
        <div>
            Trips detail
        </div>
    )
}

export default TripsDetailsPage