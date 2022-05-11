import { Request, Response } from "express";
import selectAllProducts from "../services/selectAllProducts";
import { Product } from "../types";

export async function getProducts(req: Request, res: Response): Promise<void> {
    try {
        let name = req.query.name as string;
        let order = req.query.order as string

        if(!name){
            name ="%"
          }

        if (!order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
        }

        const products: Product[] = await selectAllProducts(order, name)
        res.status(200).send(products)
    } catch (error: any) {
        res.send(error.message || error.sql.message)
    }
}