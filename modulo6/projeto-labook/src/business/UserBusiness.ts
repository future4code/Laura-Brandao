import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { FriendDeleteInput, FriendsPostsInput } from "../model/user";

export class UserBusiness {
    public createUser = async (input: any) => {
        try {
            const { name, email, password } = input;

            if (!name || !email || !password) {
                throw new Error(
                    '"name", "email" and "password" must be provided'
                );
            }

            if (name.length < 3) {
                throw new InvalidName()
            }

            if (!email.includes("@")) {
                throw new InvalidEmail()
            }

            if (password.length < 8) {
                throw new InvalidPassword()
            }

            const id: string = generateId();

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                email,
                password,
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public createFriend = async (input: any) => {
        try {
            const { user_id, friend_id } = input

            if (!user_id || !friend_id) {
                throw new Error(
                    'User id and friend id must be provided'
                );
            }

            const id: string = generateId();

            const userDatabase = new UserDatabase();
            await userDatabase.insertFriend({
                id,
                user_id,
                friend_id
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public deleteFriend = async (input: FriendDeleteInput) => {
        try {
            const { friend_id } = input

            if (!friend_id) {
                throw new Error('Missing fields!');
            }

            const userDatabase = new UserDatabase();
            await userDatabase.deleteFriend(friend_id)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
    public getFriendsPost = async (input: FriendsPostsInput) => {
        try {
            const { user_id } = input

            if (!user_id) {
                throw new Error('Missing fields!');
            }

            const userDatabase = new UserDatabase();
            return await userDatabase.getFriendsPosts(user_id)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}