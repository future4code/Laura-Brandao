import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  UnauthorizedUser,
} from "../error/customError";
import { AuthenticationData } from "../model/types";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { generateToken, getTokenData } from "../services/authenticator";
import { compareHash, generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

const userDatabase = new UserDatabase();
export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      if (role !== "NORMAL" && role !== "ADMIN") {
        role = "NORMAL";
      }

      const id = generateId();
      const hashPassword = await generateHash(password);

      const user: user = {
        id,
        email,
        password: hashPassword,
        name,
        nickname,
        role,
      };

      await userDatabase.insertUser(user);
      const token = generateToken({ id, role });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      let { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const user = await userDatabase.findUserByEmail(email);

      const hashComparison = await compareHash(password, user.password);

      if (!hashComparison) {
        throw new InvalidPassword();
      }

      const payload: AuthenticationData = { id: user.id, role: user.role };

      const token = generateToken(payload);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO): Promise<void> => {
    try {
      let { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(400, "Preencha corretamente os campos");
      }

      const { role } = getTokenData(token);

      if (role !== "ADMIN") {
        throw new UnauthorizedUser();
      }

      const editedUser = {
        name,
        nickname,
        id,
      };

      await userDatabase.editUser(editedUser)
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
