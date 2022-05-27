import { MovieDatabase } from "../data/MovieDataBase";
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
    async create({
        title,
        description,
        durationInMinutes,
        yearOfRelease
    }: any): Promise<void> {

        if (!title || !description || !durationInMinutes || !yearOfRelease) {
            throw new Error("Please fill all the fields")
        }

        const id = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title,
            description,
            durationInMinutes,
            yearOfRelease
        })
    }
}