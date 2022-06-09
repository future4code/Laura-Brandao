import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { authenticationData } from "../model/authenticationData";
import { PostInputDTO } from "../model/post";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, createdAt, authorId } = req.body;

      const input: PostInputDTO = {
        photo,
        description,
        type,
        createdAt,
        authorId,
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Product created!" });
    } catch (error: any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
    }
  };

  public getPostsById = async (req: Request, res: Response) => {
    try {
      let message = "Success!"

      const { id } = req.params

      const input: authenticationData = {
        id
      }

      const postBusiness = new PostBusiness();
      await postBusiness.getPostsById(input);
      res.status(200).send(message)

    } catch (error: any) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400
      res.send({ message })
    }
  }
}