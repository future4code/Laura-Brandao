import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let title = req.query.title

      if(!title){
         title = "%"
      }

      const result = await connection("aula49_recipes")
      .select()
      .where("title", "like", `%${title}%`)

      const recipes = result.map(toRecipe)

      if(recipes.length < 1) {
         throw new Error("Nenhuma receita encontrada")
      }

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}