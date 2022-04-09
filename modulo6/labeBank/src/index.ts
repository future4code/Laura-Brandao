import express, { Express, Request, Response  } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { users, User, BankStatement } from './users';


const app: Express = express();
app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response) => {
   let errorCode = 400
   try {
      res.status(200).send(users)

      if(users.length === 0){
         throw new Error("There's no user, create one!")
      }

   } catch (error) {
      res.status(errorCode).send(errorCode)
   }
})

app.post("/createUser", (req: Request, res: Response) => {
   let errorCode = 400
   try {
       const { name, cpf, birthday, balance, bankStatements }: User = req.body

       if ( !name || !cpf || !birthday || !balance) {
           errorCode = 422
           throw new Error("One or more fields are empty")
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



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})