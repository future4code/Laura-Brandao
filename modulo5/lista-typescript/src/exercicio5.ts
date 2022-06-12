type User = {
    name: string,
    email: string,
    role: string
}

enum Role {
    ADMIN = "admin",
    USER = "user"
}

const users: User[] = [
	{name: "Rogério", email: "roger@email.com", role: Role.USER},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
] 

function retornaAdmin(users: User[]): User[] {
    return users.filter((user) => {
        return user.role === "admin"
    })
}

console.log(retornaAdmin(users))