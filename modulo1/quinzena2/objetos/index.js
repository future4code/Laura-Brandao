//Exercícios de interpretação de código

//1.
//console.log(filme.elenco[0]) 
//Será impresso o nome no índice 0, "Matheus Nachtergaele".

//console.log(filme.elenco[filme.elenco.length - 1])
//Será impresso o conteúdo na posição 3 [(filme.elenco.lenght -> tamanho do array) -1 = 3], "Virginia Cavendish".

//console.log(filme.transmissoesHoje[2])
//Será impresso a trasmissão no índice 2, "canal: "Globo", horario: "14h"".

//2.
//a.
//console.log(cachorro)
//Será impresso todo o conteúdo do objeto (nome, idade e raça).

//console.log(gato)
//Será impresso todo o conteúdo do objeto cachorro, com mudança do nome para Juba.

//console.log(tartaruga)
//Será impresso todo o conteúdo do objeto cachorro, com mudança do nome para Jubo.

//b.
//Faz com que um objeto seja expandido.

//3.
//a.
//Será impresso o valor de backender, false; e o valor de altura, que não foi definido no objeto.

//b.
//Temos uma função que retorna o valor da propriedade de um objeto. Um objeto com os valores das propriedades. Será então impressos os valores das propriedadades, altura e backender, do objeto pessoa.




//Exercícios de escrita de código

//1.
//a.
// const pessoa = {
//     nome: "Laura",
//     apelidos: [" Laurinha ", " Laurete ", " Lalaura "]
// }

// function imprimeMensagem(pessoa) {
// 	return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
// }

// console.log (imprimeMensagem(pessoa))

//b.
// const novosApelidos = {
//     ...pessoa, apelidos:[" Lauríssima ", " Lau ", " Laurita "]
// }
// console.log(imprimeMensagem(novosApelidos))


//2

// const informacaoPessoa1 = {
//     nome: "Ana",
//     idade: 25,
//     profissão: "Advogada"
// }

// const informacaoPessoa2 = {
//     nome: "Roberto",
//     idade: 19,
//     profissão: "Engenheiro"
// }

// function retornaLista(informacaoPessoa1,informacaoPessoa2){
//     const todasInformacoes = [informacaoPessoa1.nome, informacaoPessoa2.nome, informacaoPessoa1.nome.length, informacaoPessoa2.nome.length, informacaoPessoa1.idade, informacaoPessoa2.idade, informacaoPessoa1.profissão, informacaoPessoa2.profissão, informacaoPessoa1.profissão.length, informacaoPessoa2.profissão.length]
//     return todasInformacoes
// }

// console.log(retornaLista(informacaoPessoa1,informacaoPessoa2))

//3.

// let carrinho = []

// const fruta1 = {
//     nome: "melancia" , 
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "mirtilo" ,
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "abacate" ,
//     disponibilidade: true
// }

// function recebaFruta (fruta1, fruta2, fruta3){
//     carrinho.push(fruta1, fruta2, fruta3)
//     return carrinho
// }

// console.log(recebaFruta(fruta1, fruta2, fruta3))
