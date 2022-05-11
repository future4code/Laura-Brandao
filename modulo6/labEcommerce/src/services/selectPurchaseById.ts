import { connection } from "../data/connection";

export default async function selectPurchaseById(userId: string): Promise<any> {
    const response = await connection("labecommerce_purchases")
        .select(
            "quantity",
            "total_price as totalPrice",
            "labecommerce_products.name AS product",

        )
        .join(
            "labecommerce_products",
            "labecommerce_products.id",
            "labecommerce_purchases.product_id"

        )
        .where("user_id", userId)

    return response

}