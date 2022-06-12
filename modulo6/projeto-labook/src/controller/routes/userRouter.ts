import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/create', userController.createUser)
userRouter.post('/create/friend', userController.createFriend)
userRouter.delete('/friend/delete/:friend_id', userController.deleteFriend)
userRouter.get('/friends/posts/:user_id', userController.getFriendsPost)