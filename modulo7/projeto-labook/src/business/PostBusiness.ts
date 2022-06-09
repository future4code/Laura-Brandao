import { v4 as generateId } from "uuid";
import { PostDatabase } from "../data/PostDatabase";
import { authenticationData } from "../model/authenticationData";

export class PostBusiness {
    public createPost = async (input: any) => {
        try {
            const { photo, description, type, createdAt, authorId } = input;

            if (!photo || !description || !type || !createdAt || !authorId) {
                throw new Error(
                    '"title", "description", "deadline" e "authorId" são obrigatórios'
                );
            }

            const id: string = generateId();

            const postDatabase = new PostDatabase();
            await postDatabase.insertPost({
                id,
                photo,
                description,
                type,
                createdAt,
                authorId,
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public getPostsById = async (id: authenticationData) => {
        try {
            const postDatabase = new PostDatabase();
            await postDatabase.getPostsById(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
}
