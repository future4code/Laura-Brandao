import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

    public createUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password } = req.body

            const input = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness
            userBusiness.createUser(input)

            res.status(201).send({ message: "User crreated!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }




}
