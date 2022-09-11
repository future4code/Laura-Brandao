import { DogWalkingDatabase } from "../data/DogWalkingDatabase";
import { dogWalking, dogWalkingInputDTO } from "../model/types";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
export class DogWalkingBusiness {
  public createWalking = async (input: dogWalkingInputDTO) => {
    try {
      const {
        appointment_date,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time } = input;

      const calculations = (duration: any, pets: any) => {
        if (duration === "00:30:00") {
          if (pets >= 2) {
            let quantity = pets
            pets = pets * -15
            let price: number = 25 * quantity + pets
            return price
          } else {
            let price: number = 25 * pets
            return price
          }
        } else if (duration === "01:00:00") {
          if (pets >= 2) {
            let quantity = pets
            pets = pets * -20
            let price: number = 35 * quantity + pets
            return price
          } else {
            let price: number = 35 * pets
            return price
          }
        }
      }

      const price: any = calculations(input.duration, input.pets)
      const id: string = idGenerator.generate()
      const stats: any = "Pending"

      const dogWalkingDatabase = new DogWalkingDatabase();
      const walking: dogWalking = {
        id,
        stats,
        appointment_date,
        price,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time
      }
      await dogWalkingDatabase.insertWalking({
        id,
        stats,
        appointment_date,
        price,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public showWalking = async (walking: dogWalking) => {
    try {
      return await new DogWalkingDatabase().showWalking(walking);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public startWalking = async (walking: dogWalking) => {
    try {
      return await new DogWalkingDatabase().startWalking(walking);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public finishWalking = async (walking: dogWalking) => {
    try {
      return await new DogWalkingDatabase().finishWalking(walking);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public allwalking = async (walking: dogWalking) => {
    try {

      return await new DogWalkingDatabase().allwalking(walking);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}