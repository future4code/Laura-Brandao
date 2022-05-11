import { Request, Response } from "express";
import createPurchase from "../services/createPurchase";

export const postPurchase = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }
        if (quantity < 0) {
            errorCode = 422
            throw new Error("Quantity field must be greater than 0")
        }

        await createPurchase(userId, productId, quantity)

        res.status(201).send({ message: "Successful purchase!" });
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}