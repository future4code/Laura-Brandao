export const products: Product[] = [
    {
        id:"1",
        name: "protetor solar",
        price: 65
    },
    {
        id:"2",
        name: "hidratante antioxidante",
        price: 89
    },
    {
        id:"3",
        name: "limpador facial",
        price: 55
    }
]

export type Product = {
    id: string,
    name: string,
    price: number
}