import app from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers"
import { postUsers } from "./endpoints/postUser";
import { postProduct } from "./endpoints/postProduct";


app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/users", postUsers)
app.post("/products", postProduct)

