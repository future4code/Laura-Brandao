import { app } from "./controller/app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post("/user", userController.createUser)
app.get("/all", userController.getUsers)
app.delete('/:id', userController.deleteUser)


