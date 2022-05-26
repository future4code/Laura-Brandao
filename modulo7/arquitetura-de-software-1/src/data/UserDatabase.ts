import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {

   public insertUser = async (
      user: user
   ) => {
      try {
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
         }).into('User_Arq')
      } catch (error: any) {
         throw new Error(error.message)
      }

   }

   public async get(): Promise<user[]> {

      try {
         const users: user[] = [];

         const result = await UserDatabase.connection()
            .select("*")
            .from('User_Arq');

         for (let user of result) {
            users.push(user);
         }

         return users;

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

   public async deleteUser(
      id: string
   ): Promise<void> {
      try {
         await UserDatabase.connection()
            .where({ id })
            .from('User_Arq')
            .delete()

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
}

