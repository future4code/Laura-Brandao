import { Request, Response } from "express";
import { DogWalkingDatabase } from "../data/DogWalkingDatabase";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { dogWalking, dogWalkingInputDTO } from "../model/types";
import { InvalidData, InvalidTime, InvalidPet } from "../customErrors/customError";

export class DogWalkingController {
  public createWalking = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      if (req.body.pets < 1) {
        throw new InvalidPet();
      }
      if (!req.body.appointment_date || !req.body.duration || !req.body.latitude || !req.body.longitude
        || !req.body.pets || !req.body.start_time || !req.body.end_time) {
        throw new InvalidData();
      }
      if (req.body.duration != "00:30:00" && req.body.duration != "01:00:00") {
        throw new InvalidTime()
      }

      const { appointment_date,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time } = req.body

      const input: dogWalkingInputDTO = {
        appointment_date,
        duration,
        latitude,
        longitude,
        pets,
        start_time,
        end_time
      }

      const dogWalkingBusiness = new DogWalkingBusiness
      dogWalkingBusiness.createWalking(input)

      res.status(201).send({ message: "Hike successfully added!" })
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message)
    }
  }
  public showWalking = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
      }
      const duration = await new DogWalkingDatabase().showWalking(input);

      res.send(duration).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public startWalking = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
      }
      const start = await new DogWalkingDatabase().startWalking(input);

      res.send(start).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public finishWalking = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
      }
      const end = await new DogWalkingDatabase().finishWalking(input);

      res.send(end).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public allwalking = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
        search: req.query.search,
        sort: req.query.sort as string,
        order: req.query.order as string,
        page: Number(req.query.page),
        size: Number(req.query.size),

      }

      let offset = input.size * (input.page - 1)
      input.offset = offset

      if (!input.appointment_date) {
        input.appointment_date = "%"
      }

      if (input.sort !== "appointment_date") {
        input.sort = "appointment_date"
      }

      if (!input.order || input.order.toUpperCase() !== "ASC" && input.order.toUpperCase() !== "DESC") {
        input.order = "ASC"
      }

      if (isNaN(input.page) || input.page < 1) {
        input.page = 1
      }

      if (isNaN(input.size) || input.size < 1) {
        input.size = 10
      }

      const end = await new DogWalkingDatabase().allwalking(input);

      res.send(end).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
}
