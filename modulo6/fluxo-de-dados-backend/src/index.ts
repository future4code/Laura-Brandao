import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { products, Product } from './data';
import { v4 as generateId } from 'uuid'

const app: Express = express();

app.use(express.json());
app.use(cors());



app.get("/test", (req: Request, res: Response) => {
    res.send("Tudo OK!")
})
// 3.
app.post("/newProduct", (req: Request, res: Response) => {
    try {
        const productName: string = req.body.name
        const productPrice: number = req.body.price

        if (!productName || !productPrice) {
            throw new Error("Um ou mais campos faltando")
        }

        if (typeof productName !== "string") {
            throw new Error("O nome deve ser uma string")
        }

        if (typeof productPrice !== "number" || productPrice <= 0) {
            throw new Error("Preço precisa ser um número maior que zero")
        }

        const newProduct: Product = {
            id: generateId(),
            name: productName,
            price: productPrice
        }
        products.push(newProduct)
        res.status(200).send(products)
    } catch (error: any) {
        switch (error.message) {
            case "Um ou mais campos faltando":
                res.status(422)
                break
            case "O nome deve ser uma string":
                res.status(422)
                break
            case "Preço precisa ser um número maior que zero":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message || "Erro inesperado")
    }
})
// 4.
app.get("/products", (req: Request, res: Response) => {
    try {
        res.send(products)
    } catch (error: any) {
        res.send(error.message || "Erro inesperado")
    }
})
// 5.
app.put("/editPrice/:id", (req: Request, res: Response) => {
    try {
        const idProduct: string = req.params.id
        const newPrice: number = req.body.price

        if (!newPrice) {
            throw new Error("Campo não encontrado")
        }
        if (typeof newPrice !== "number" || newPrice <= 0) {
            throw new Error("Preço precisa ser número maior que zero")
        }

        const newProductPrice = products.map((product) => {
            if (product.id === idProduct) {
                product.price = newPrice
            }
            if (!product.price) {
                throw new Error("Produto não encontrado")
            }
            return product
        })

        res.status(200).send(newProductPrice)
    } catch (error: any) {
        switch (error.message) {
            case "Campo não encontrado":
                res.status(422)
                break
            case "Preço precisa ser número maior que zero":
                res.status(422)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message || "Erro inesperado")
    }

})
// 6.
app.delete("/deleteProduct/:id", (req: Request, res: Response) => {
    try {
        const idProduct: string = req.params.id
        const newList = products.filter((product) => product.id === idProduct)

        if (newList.length > 0) {
            const index = products.indexOf(newList[0])
            products.splice(index, 1)
        }

        if (!newList) {
            throw new Error("Produto não encontrado")
        }

        res.status(200).send(products)

    } catch (error: any) {
        switch(error.message){
            case "Produto não encontrado":
                res.status(404)
                break;
            default:
                res.status(500)
        }
        res.send(error.message || "Erro inesperado")

    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
