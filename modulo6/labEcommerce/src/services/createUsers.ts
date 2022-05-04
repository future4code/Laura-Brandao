import { connection } from "../data/connection";
import { v4 as generateId } from "uuid"

export default async function createUser(name: string, email: string, password: string): Promise<void> {
    const id = generateId()

    await connection("labecommerce_users")
        .insert({
            id,
            name,
            email,
            password
        })
}