import express, { Request, Response } from "express";
import cors from 'cors'
import { toDos } from "./data";
import {v4 as generateId } from 'uuid'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
});

app.get("/todos", (req: Request, res: Response) => {
    const taskComplete = toDos.filter((todo) => {
        if(todo.complete === true){
            return todo
        }
    })  
    res.send(taskComplete)
})

app.post("/newTask", (req: Request, res: Response) => {
    const userName = req.headers.authorization
    const taskName = req.body.title
    if(!taskName){
        res.status(404).send("Título não encontrado")
        return;
    }
    const newTask = {
        userID: userName,
        id: generateId(),
        title: "delectus aut autem",
        complete: false
    } 
    console.log(newTask)
    res.status(200).send([...toDos, newTask])
})