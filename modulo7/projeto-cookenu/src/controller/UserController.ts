import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness()
export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {

          const input: UserInputDTO = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            nickname: req.body.nickname,
            role: req.body.role
          }
          
         const token = await userBusiness.createUser(input)
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    


      public login = async (req: Request, res: Response) => {
        try {

          const input: LoginInputDTO   = {
            email: req.body.email,
            password: req.body.password
          }
       
         const token = await userBusiness.login(input)
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
      
      public editUser = async (req: Request, res: Response) => {
        try {

          const input: EditUserInputDTO   = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id,
            token: req.headers.authorization! 
          }
       
         const token = await userBusiness.editUser(input)
    
          res.status(200).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  
  
}
