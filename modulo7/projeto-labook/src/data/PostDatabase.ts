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
                createdAt: post.createdAt,
                authorId: post.authorId
            }).into(PostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getPostsById(id: authenticationData): Promise<post[]> {

        try {
            const posts: post[] = [];

            const result = await PostDatabase.connection()
                .select("*")
                .from(PostDatabase.TABLE_NAME);

            for (let post of result) {
                posts.push(post);
            }

            return posts;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}