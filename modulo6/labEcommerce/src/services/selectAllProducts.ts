import { connection } from "../data/connection";

export default async function selectAllProducts(order: string, name: string): Promise<any>  {
    const result = await connection("labecommerce_products")
    .select()
    .where("labecommerce_products.name", "like", `%${name}%`)
    .orderBy("labecommerce_products.price", order)
    return result
}