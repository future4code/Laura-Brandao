enum Setor {
  FINANCEIRO = "financeiro",
  MARKETING = "marketing",
  VENDAS = "vendas",
}

type Pessoa = {
  nome: string,
  salario: number,
  setor: Setor,
  presencial: boolean,
};

const funcionarios: Pessoa[] = [
  { nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: Setor.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: Setor.MARKETING, presencial: true },
];

function retornaSetorMarketing(funcionarios: Pessoa[]): Pessoa[] {
    return funcionarios.filter((funcionario) => {
        return funcionario.setor === "marketing" && funcionario.presencial === true
    })
}

console.log(retornaSetorMarketing(funcionarios))