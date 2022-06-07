export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface UserInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface UserOutputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string,
    id: string
}