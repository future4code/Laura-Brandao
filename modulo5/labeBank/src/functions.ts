import { User } from "./users";

export function convertDate() {
    const todaysDate = new Date().getTime();
    const date = new Date(todaysDate * 1);
    const newDate = date.toLocaleDateString();

    return newDate;
}

export function age(birthday: string): number {
    const arraybirthday: string[] = birthday.split("/")
    const todaysDate: string[] = convertDate().split("/")
    const age: number = Number(todaysDate[2]) - Number(arraybirthday[2])

    return age
}

export function verifyCpf(users: User[], cpf: string): boolean {
    const verifyParity: User | undefined = users.find((user) => user.cpf === cpf);
    if (verifyParity) {
        return true
    } else { return false }
}