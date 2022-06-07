export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
}

export interface UserOutputDTO {
    name: string,
    email: string,
    id: string
}