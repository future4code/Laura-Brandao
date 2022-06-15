import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { authenticationData } from "../model/authenticationData";
import { PostInputDTO } from "../model/post";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, created_at, author_id } = req.body;

      const input: PostInputDTO = {
        photo,
        description,
        type,
        created_at,
        author_id
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post created!" });
    } catch (error: any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
    }
  };

  public getPostsById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      const postBusiness = new PostBusiness();
      const result = await postBusiness.getPostsById(id);
      res.status(200).send(result)

    } catch (error: any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
    }
  }
}