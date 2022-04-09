import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { users, User, BankStatement } from './users';
import { age, convertDate } from './functions';


const app: Express = express();
app.use(express.json());
app.use(cors());

// método get para pegar todos os usuários
app.get("/users", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      res.status(200).send(users)

      if (users.length === 0) {
         throw new Error("There's no user, create one!")
      }

   } catch (error) {
      res.status(errorCode).send(errorCode)
   }
})

// método para criação de novos usuários
app.post("/createUser", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const { name, cpf, birthday, balance, bankStatements }: User = req.body

      const majority = age(birthday) >= 18

      if (!name || !cpf || !birthday || !balance) {
         errorCode = 422
         throw new Error("One or more fields are empty")
      }
      if (majority !== true) {
         throw new Error("User isn't of legal age")
      }

      const newUser: User = {
         name, cpf, birthday, balance, bankStatements
      }

      users.push(newUser)

      res.status(200).send("User was created")
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

// método para verificar saldo por meio de nome e cpf
app.get("/balance", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const name: string = req.query.name as string
      const cpf: string = req.query.cpf as string
      
      const user: User | undefined = users.find((item) => item.name.toUpperCase() === name.toUpperCase() && item.cpf === cpf)
      console.log(user?.balance.toString())
      if (!user) {
         errorCode = 404
         throw new Error("User not found")
      }

      res.status(200).send(user?.balance.toString())
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})