//Exercícios de interpretação de código

//1. O que vai ser impresso no console?
//Será impresso o item de cada índice, o índice, e o array em questão.

//2. O que vai ser impresso no console?
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
  
//3. O que vai ser impresso no console?
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" }


//Exercícios de escrita de código

//1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a. 
//  const nomePets = pets.map((item) => {
//      return item.nome
//  })
// console.log(nomePets)

//b.
// function filtraSalsicha (item){
//     return item.raca === "Salsicha"
// }
// const petSalsicha = pets.filter(filtraSalsicha)
// console.log(petSalsicha)

//c.
// function filtraPoodle (item){
//     return item.raca === "Poodle"
// }

// function retornaMensagem (pets){
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
// }
// const enviaMensagem = pets.filter(filtraPoodle).map(retornaMensagem)
// console.log(enviaMensagem)


//2.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//a.
//  const nomeProdutos = produtos.map((item)=>{
//      return item.nome
//  })
//  console.log(nomeProdutos)

//b.
// function precosComDesconto (item){
//     return `Nome: ${item.nome} e preço com desconto: ${item.preco*0.95}.`
// }

// const produtosComDesconto = produtos.map(precosComDesconto)
// console.log(produtosComDesconto)

//c.
// function filtraBebidas (item){
//     return item.categoria === "Bebidas"
// }
// const categoriasBebidas = produtos.filter(filtraBebidas)
// console.log(categoriasBebidas)

//d.
//e.
// const produtosYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(produtosYpe)

// function retornaFrase (item){
//     return `Compre ${item.nome} por ${item.preco}.`
// }

// console.log(produtosYpe.map(retornaFrase))