import express from "express";
import { DogWalkingController } from "../controller/DogWalkingController";

export const WalkingDog = express.Router();
const walkingController = new DogWalkingController();

WalkingDog.get('/', walkingController.allwalking)
WalkingDog.post('/walking', walkingController.createWalking)
WalkingDog.get('/show/:id', walkingController.showWalking)
WalkingDog.get('/start_walk/:id', walkingController.startWalking)
WalkingDog.get('/finish_walk/:id', walkingController.finishWalking)