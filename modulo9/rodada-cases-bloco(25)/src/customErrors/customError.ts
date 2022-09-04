export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}
export class InvalidPet extends CustomError{ 
  constructor(){
      super(400, "The amount must be greater than zero")
  }
}
export class InvalidTime extends CustomError{ 
  constructor(){
      super(400, "Only period durations of 00:30:00 or 01:00:00")
  }
}

export class InvalidData extends CustomError{ 
  constructor(){
      super(400,  'Fill in the fields "schedule date", "duration, start and end time", "number of pets", "latitude and longitude"')
  }
}