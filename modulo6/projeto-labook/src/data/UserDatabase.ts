import { friend, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_USER = 'labook_users';
    private static TABLE_FRIENDSHIP = 'labook_friendship';
    private static TABLE_POSTS = 'labook_posts'

    public insertUser = async (user: user) => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(UserDatabase.TABLE_USER)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public insertFriend = async (friend: friend) => {
        try {
            await UserDatabase.connection.insert({
                id: friend.id,
                user_id: friend.user_id,
                friend_id: friend.friend_id
            }).into(UserDatabase.TABLE_FRIENDSHIP)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deleteFriend = async (id: string) => {
        try {
            return await UserDatabase.connection(UserDatabase.TABLE_FRIENDSHIP)
                .where("id", "LIKE", id)
                .del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getFriendsPosts = async (id: string) => {
        try {
            const friendPosts =  await UserDatabase.connection(UserDatabase.TABLE_FRIENDSHIP)
                .where("user_id", "LIKE", id)
                .innerJoin(UserDatabase.TABLE_POSTS, "labook_friendship.friend_id", 'labook_posts.author_id')
                .select("labook_posts.id", "photo", "description", "type", "created_at", "author_id")
                .orderBy("created_at", "desc")
            console.log(friendPosts)
            return friendPosts
                
            

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}