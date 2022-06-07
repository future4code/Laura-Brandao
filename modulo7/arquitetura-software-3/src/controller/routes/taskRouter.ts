import express from "express"
import { TaskController } from "../TaskController"

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.post("/create", taskController.createTask)