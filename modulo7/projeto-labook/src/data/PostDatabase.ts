import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/post";

export class PostDatabase extends BaseDatabase {

    public insertPost = async (
        post: post
    ) => {
        try {
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                authorId: post.authorId
            }).into('labook_posts')

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async get(): Promise<post[]> {

        try {
            const posts: post[] = [];

            const result = await PostDatabase.connection()
                .select("*")
                .from('labook_posts');

            for (let post of result) {
                posts.push(post);
            }

            return posts;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}