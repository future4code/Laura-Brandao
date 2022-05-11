import app from "./app";
import { getProducts } from "./endpoints/getProducts";
import { getUsers } from "./endpoints/getUsers"
import { postUsers } from "./endpoints/postUser";
import { postProduct } from "./endpoints/postProduct";
import { postPurchase } from "./endpoints/postPurchase"
import { getPurchasesByUserId } from "./endpoints/getPurchasesByUserId";


app.get("/users", getUsers)
app.get("/products", getProducts)
app.post("/users", postUsers)
app.post("/products", postProduct)
app.post("/purchases", postPurchase)
app.get("/users/:user_id/purchases", getPurchasesByUserId)

