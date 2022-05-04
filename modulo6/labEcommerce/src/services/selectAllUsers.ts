import { connection } from "../data/connection";

export default async function selectAllUsers(): Promise<any> {
    const result = await connection("labecommerce_users")
    return result
}