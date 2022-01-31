import { useHistory } from "react-router-dom";
import { getToken } from "../Utils/localStorage"
import { useEffect } from "react";

export const useProtectedPage = () => {
    const history = useHistory(); 

    useEffect(() => {
        const token = getToken();
        if(!token) history.push("/login")
    })
}