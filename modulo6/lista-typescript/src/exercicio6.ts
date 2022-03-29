type Account = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const accounts: Account[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaSaldoFinal(accounts: Account[]): Account[] {
    const listaDevedores =  accounts.map((account) => {
        let debitoTotal = 0
        account.debitos.forEach((debito) => {
            debitoTotal += debito
        })
        // o reduce funciona como o forEach, porém é mais "resumido" e toma menos processamento
        const saldoFinal = account.saldoTotal - debitoTotal
        return { cliente: account.cliente, saldoTotal: saldoFinal, debitos: [] }
    }).filter((account) => {
        return account.saldoTotal < 0 
    })
    return listaDevedores
}

console.log(retornaSaldoFinal(accounts))