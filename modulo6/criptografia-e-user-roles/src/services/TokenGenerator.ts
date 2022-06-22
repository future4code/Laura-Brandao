import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/user'

export class TokenGenerator {
    public generateToken = (input: AuthenticationData): string => {
        const expiresIn = "1min";
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );
        return token;
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role,
        };
        return result;
    }
}