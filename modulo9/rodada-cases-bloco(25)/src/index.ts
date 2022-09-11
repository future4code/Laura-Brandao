import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { WalkingDog } from "./routes/WalkingDog";
dotenv.config();
const app = express();
app.use(express.json());




app.get("/", WalkingDog)
app.post("/walking", WalkingDog)
app.get("/show/:id", WalkingDog)
app.get("/start_walk/:id", WalkingDog)
app.get("/finish_walk/:id", WalkingDog)





const server = app.listen(3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});



