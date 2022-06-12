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

export type friend = {
    id: string,
    user_id: string,
    friend_id: string
}

export interface FriendDeleteInput{
    friend_id: string
}

export interface FriendsPostsInput{
    user_id: string
}