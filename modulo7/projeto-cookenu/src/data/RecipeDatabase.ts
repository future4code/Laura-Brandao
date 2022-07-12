import { AuthenticationData } from "../model/types";
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";

export class RecipeDatabase extends BaseDatabase {
    private TABLE_NAME = "recipes_cookenu";

    public createRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    creation_date: recipe.creationDate,
                })
                .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getAllRecipes = async () => {
        
    }
}

