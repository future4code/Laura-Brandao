import { getToken } from "./localStorage"

export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/laura-lanna-joy"
export const auth = {
    headers: {
        auth: getToken()
    }
}
