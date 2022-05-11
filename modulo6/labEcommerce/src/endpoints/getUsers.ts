import { Request, Response } from "express";
import selectAllUsers from "../services/selectAllUsers";
import { User } from "../types";

export async function getUsers(req: Request, res: Response): Promise<void> {
    try {
        const users: User[] = await selectAllUsers()
        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message || error.sql.message)
    }
}