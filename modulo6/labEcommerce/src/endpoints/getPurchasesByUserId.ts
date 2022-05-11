import { Request, Response } from "express";
import selectPurchaseById from "../services/selectPurchaseById";

export async function getPurchasesByUserId(req: Request, res: Response): Promise<void> {
    let errorCode = 400
    try {
        const userId = req.params.user_id
        console.log(userId)

        if (!userId) {
            errorCode = 422
            throw new Error("User ID not found")
        }
        const result = await selectPurchaseById(userId)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }

}
