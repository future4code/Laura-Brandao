import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";


export class UserBusiness {
public createUser = async (input: any) => {
   try {
     const { name, nickname, email, password } = input;
 
     if (!name || !nickname || !email || !password) {
       throw new Error(
         'Preencha os campos "name","nickname", "email" e "password"'
       );
     }
 
     const id: string = generateId();
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       nickname,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

