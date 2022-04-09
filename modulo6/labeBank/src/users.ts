export type User = {
    name: string,
    cpf: string,
    birthday: string,
    balance: number
    bankStatements: BankStatement[]
}

export type BankStatement = {
    amount: number,
    date: string,
    description: string
}

export let users: User[] = [
    {
        name: "Samwise Gamgee",
        cpf: "011.121.012-21",
        birthday: "22/09/1980",
        balance: 2500,
        bankStatements: [
            {
                amount: 10,
                date: "02/02/2021",
                description: "second breakfast"
            },
            {
                amount: 15,
                date: "03/02/2021",
                description: "second breakfast"
            }
        ]
    },
    {
        name: "Peregrin Tuk",
        cpf: "021.221.022-22",
        birthday: "12/09/1981",
        balance: 1000,
        bankStatements: [
            {
                amount: 20,
                date: "02/02/2021",
                description: "second breakfast"
            },
            {
                amount: 25,
                date: "03/02/2021",
                description: "second breakfast"
            }
        ]
    },
    {
        name: "Bilbo Baggins",
        cpf: "031.321.032-23",
        birthday: "11/09/1950",
        balance: 20000,
        bankStatements: [
            {
                amount: 50,
                date: "02/02/2021",
                description: "second breakfast"
            },
            {
                amount: 60,
                date: "03/02/2021",
                description: "second breakfast"
            }
        ]
    }
]

