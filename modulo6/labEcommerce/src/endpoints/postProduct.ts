import { Request, Response } from "express";
import createProduct from "../services/createProduct";

export const postProduct = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    
    try {

        const { name, price, imageUrl } = req.body

        console.log(name)
        console.log(price)
        console.log(imageUrl)

        if (!name || !price || !imageUrl) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }
        if (name.length < 2) {
            errorCode = 422
            throw new Error("Name field must be longer than 2 characters")
        }
        if (price.length < 0) {
            errorCode = 422
            throw new Error("Price field must be longer than 1 characters")
        }
        if (imageUrl.length < 2) {
            errorCode = 422
            throw new Error("Image field must be longer than 2 characters")
        }

        await createProduct(name, price, imageUrl)

        res.status(201).send({ message: "Product created" });

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}