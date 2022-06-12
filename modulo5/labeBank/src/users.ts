export enum Transaction {
    DEBIT = "Debit",
    CREDIT = "Credit",
    DEPOSIT = "Deposit",
    PIX = "Pix",
    TRANSFER = "Transfer"
}

export type BankStatement = {
    amount: number,
    date: string,
    description: Transaction
}

export type User = {
    name: string,
    cpf: string,
    birthday: string,
    balance: number
    bankStatements: BankStatement[]
}


export let users: User[] = [
    {
        name: "Samwise",
        cpf: "01112101221",
        birthday: "22/09/1980",
        balance: 2500,
        bankStatements: [
            {
                amount: 10,
                date: "02/02/2021",
                description: Transaction.DEBIT
            },
            {
                amount: 15,
                date: "03/02/2021",
                description: Transaction.DEPOSIT
            }
        ]
    },
    {
        name: "Peregrin",
        cpf: "02122102222",
        birthday: "12/09/1981",
        balance: 1000,
        bankStatements: [
            {
                amount: 20,
                date: "02/02/2021",
                description: Transaction.PIX
            },
            {
                amount: 25,
                date: "03/02/2021",
                description: Transaction.PIX
            }
        ]
    },
    {
        name: "Bilbo",
        cpf: "03132103223",
        birthday: "11/09/1950",
        balance: 20000,
        bankStatements: [
            {
                amount: 50,
                date: "02/02/2021",
                description: Transaction.DEBIT
            },
            {
                amount: 60,
                date: "03/02/2021",
                description: Transaction.DEBIT
            }
        ]
    }
]

