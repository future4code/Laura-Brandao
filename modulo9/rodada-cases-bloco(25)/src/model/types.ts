export type dogWalking = {
    id: string,
    stats: STATUS_TYPES.PENDING,
    appointment_date: string,
    price: number,
    duration: string,
    latitude: number,
    longitude: number,
    pets: number,
    start_time: string,
    end_time: string
}

export type dogWalkingInputDTO = {
    appointment_date: string,
    duration: string,
    latitude: number,
    longitude: number,
    pets: number,
    start_time: string,
    end_time: string
}

enum STATUS_TYPES {
    PENDING = "Pending",
    PROGRESS = "In progress",
    DONE = "Done",
}