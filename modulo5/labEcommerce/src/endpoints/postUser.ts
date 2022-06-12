import { Request, Response } from "express";
import createUser from "../services/createUsers";

export const postUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }
        if (name.length < 2) {
            errorCode = 422
            throw new Error("Name field must be longer than 2 characters")
        }
        if (email.length < 10) {
            errorCode = 422
            throw new Error("Email field must be longer than 10 characters")
        }
        if (password.length < 2) {
            errorCode = 422
            throw new Error("Password field must be longer than 2 characters")
        }

        await createUser(name, email, password)

        res.status(201).send({ message: "User created" });

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}