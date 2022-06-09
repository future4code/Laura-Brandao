import { app } from "./controller/app";
import { postRouter } from "./controller/routes/postRouter";
import { userRouter } from "./controller/routes/userRouter";

app.use("/user", userRouter);
app.use("/post", postRouter);