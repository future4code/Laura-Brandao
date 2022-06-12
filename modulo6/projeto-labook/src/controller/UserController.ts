import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { FriendDeleteInput, FriendsPostsInput } from "../model/user";


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

            res.status(201).send({ message: "User created!" })
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
    }

    public createFriend = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { user_id, friend_id } = req.body

            const input = {
                user_id,
                friend_id
            }

            const userBusiness = new UserBusiness
            userBusiness.createFriend(input)

            res.status(201).send({ message: "Friend created!" })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
    }

    public deleteFriend = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { friend_id } = req.params

            const input: FriendDeleteInput = {
                friend_id
            }

            const userBusiness = new UserBusiness();
            await userBusiness.deleteFriend(input)

            res.status(201).send({ message: "Friend successfully deleted!" });

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })      
        }
    }
    public getFriendsPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { user_id } = req.params

            const input: FriendsPostsInput = {
                user_id
            }

            const userBusiness = new UserBusiness();
            const result = await userBusiness.getFriendsPost(input)

            res.status(200).send(result);

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })      
        }
    }


}
