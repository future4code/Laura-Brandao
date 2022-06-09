import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    public createUser = async (input: any) => {
        try {
            const { name, email, password } = input;

            if (!name || !email || !password) {
                throw new Error(
                    '"name", "email" and "password" must be provided'
                );
            }

            const id: string = generateId();

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                email,
                password,
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

}