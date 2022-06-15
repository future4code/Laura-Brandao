import { app } from "./controller/app"
import { taskRouter } from "./controller/routes/taskRouter"
import { userRouter } from "./controller/routes/userRouter"




app.use('/user', userRouter )

app.use('/task',taskRouter )


