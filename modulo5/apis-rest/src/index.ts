import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User } from "./data";


const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(errorCode).send(errorCode)
    }
})

app.get("/userByType", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const type: string = req.query.type as string
        const findUserByType = users.filter((user) => user.type === type.toUpperCase())

        if (!type) {
            errorCode = 404
            throw new Error("User not found")
        }

        if (findUserByType.length === 0) {
            throw new Error("Type has to be admin or normal")
        }

        res.status(200).send(findUserByType)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/userByName", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => user.name.toUpperCase() === name.toUpperCase())

        if (!user) {
            errorCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/createUser", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id, name, email, type, age }: User = req.body

        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }

        const newUser: User = {
            id, name, email, type, age 
        }

        users.push(newUser)

        res.status(200).send("User was created")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Não houve mudanças mudando para put. Porém, a forma mais correta de se criar outro usuário seria o POST, e edição seria o PUT.#






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});