import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";
import { Product } from "../types";

async function productById(productId: string): Promise<any> {
    const result = await connection("labecommerce_products").where("id", productId)
    return result
}

export default async function createPurchase(userId: string, productId: string, quantity: number): Promise<void> {
    const id = generateId()
    const product= await productById(productId)

    const totalPrice = product.map((item: Product) => {
        return item.price*quantity
    })

    await connection("labecommerce_purchases")
        .insert({
            id: id,
            user_id: userId,
            product_id: productId,
            quantity: quantity,
            total_price: totalPrice
        })
}
