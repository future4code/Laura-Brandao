import { app } from "./app";
import { getAllUsers } from "./endpoints/gelAllUsers";

app.get("/users", getAllUsers)