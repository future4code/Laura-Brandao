import { connection } from "../data/connection";
import { v4 as generateId } from "uuid"

export default async function createProduct(name: string, price: number, imageUrl: string): Promise<void> {
    const id = generateId()


    await connection("labecommerce_products")
        .insert({
            id,
            name,
            price,
            image_url: imageUrl
        })
}