import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { users, User, BankStatement } from './users';
import { age, convertDate, verifyCpf } from './functions';


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
app.post("/create/user", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const { name, cpf, birthday }: User = req.body

      const majority = age(birthday) >= 18

      const cpfIsTheSame = verifyCpf(users, cpf)

      if (!name || !cpf || !birthday) {
         errorCode = 422
         throw new Error("One or more fields are empty!")
      }
      if (!majority) {
         throw new Error("User isn't of legal age!")
      }
      if (cpfIsTheSame) {
         throw new Error("CPF already exists!")
      }

      const newUser: User = {
         name, cpf, birthday, balance: 0, bankStatements: []
      }

      users.push(newUser)
      console.log(newUser)

      res.status(200).send("User was created!")
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
      if (!user) {
         errorCode = 404
         throw new Error("User not found")
      }

      res.status(200).send(user?.balance.toString())
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

// método para adicionar saldo, passando nome, cpf e o valor
app.put("/add/balance", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const { name, cpf, balance, amount, date, description } = req.body

      if (!name || !cpf || !balance) {
         errorCode = 422
         throw new Error("One or more fields are empty")
      }


      const totalBalance: User | undefined = users.find((user) => {
         if (user.name.toUpperCase() === name.toUpperCase() && user.cpf === cpf) {
            return user.balance += balance
         }
         if (amount > user.balance) {
            throw new Error("You haven't enough balance")
         }
      })


      if (description !== "Deposit") {
         errorCode = 422
         throw new Error("Parameter type is invalid, must be deposit")
      }


      totalBalance?.bankStatements.push({ amount, date, description })


      res.status(200).send(totalBalance)
   } catch (error: any) {
      res.status(errorCode).send(error.message)

   }
})

// método para pagar contas
app.post("/add/payBill", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const { cpf, amount, date, description } = req.body
      const user: User | undefined = users.find((user) => user.cpf === cpf)

      if (!amount || !description) {
         errorCode = 422
         throw new Error("One or more fields are empty")
      }
      if (!user) {
         errorCode = 404
         throw new Error("User not found")
      }
      if(!date){
         const newDate = convertDate()
         user.bankStatements.push({ amount, date: newDate, description })
      }

      user.bankStatements.push({ amount, date, description })
      res.status(200).send(user)

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