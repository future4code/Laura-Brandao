import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/post";
import { authenticationData } from "../model/authenticationData";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";

    public insertPost = async (
        post: post
    ) => {
        try {
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.created_at,
                author_id: post.author_id
            }).into(PostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public getPostsById = async(id: string) => {

        try {
            return await PostDatabase.connection(PostDatabase.TABLE_NAME)
                .where("id","LIKE", id)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}