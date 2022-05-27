import express, {Express} from 'express'
import cors from 'cors'

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor rodando na 3003")
})
