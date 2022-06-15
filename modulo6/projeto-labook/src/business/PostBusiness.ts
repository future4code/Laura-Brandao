import { v4 as generateId } from "uuid";
import { PostDatabase } from "../data/PostDatabase";
import { authenticationData } from "../model/authenticationData";

export class PostBusiness {
    public createPost = async (input: any) => {
        try {
            const { photo, description, type, created_at, author_id } = input;

            if (!photo || !description || !type || !created_at || !author_id ) {
                throw new Error('Missing fields!');
            }

            const id: string = generateId();

            const postDatabase = new PostDatabase();
            await postDatabase.insertPost({
                id,
                photo,
                description,
                type,
                created_at,
                author_id
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public getPostsById = async (id: string) => {
        try {
            const postDatabase = new PostDatabase();
            return await postDatabase.getPostsById(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
}
