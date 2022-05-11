export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string
}

export type Purchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}