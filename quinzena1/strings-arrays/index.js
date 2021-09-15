//Exercícios de interpretação de códigos

//1.
// let array
// console.log('a. ', array) // a. indefinida
// array = null
// console.log('b. ', array) // b. nula
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11
// let i = 0
// console.log('d. ', array[i]) // d. 3
// array[i+1] = 19
// console.log('e. ', array) // e. array [3,19,5,6,7,8,9,10,11,12,13]
// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

//2.
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// SUBI NUM ÔNIBUS EM MIRROCOS , 27 (23+4 espaçamentos)



//Exercícios de escrita de códigos

//1.
// let emailDoUsuario = prompt("Digite o seu email!")
// let nomeDoUsuario = prompt("Digite o seu nome!")
// const mensagem = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso! Seja bem-vinda(o), ${nomeDoUsuario}!`
// console.log (mensagem)

//2.
// let comidasFavoritas = ["batata-frita", "guacamole", "pão de queijo", "frango com quiabo", "farofa"]
// console.log(comidasFavoritas)

// const quebraDeLinha = "\n"
//console.log(comidasFavoritas[0], quebraDeLinha, comidasFavoritas[1], quebraDeLinha, comidasFavoritas[2], quebraDeLinha, comidasFavoritas[3], quebraDeLinha, comidasFavoritas[4])
//OU
// comidasFavoritas.forEach(comida =>{
//     console.log(comida + quebraDeLinha)
// })

// let comidaPreferidaUsuario = prompt("Informe sua comida favorita!")
// comidasFavoritas [0+1] = comidaPreferidaUsuario
// console.log (comidasFavoritas)

//3.
// let listaDeTarefas = []

// let tarefa1 = prompt("Informe uma tarefa que você precisa realizar no dia!")
// let tarefa2 = prompt("Informe outra tarefa que você precisa realizar no dia!")
// let tarefa3 = prompt("Informe uma outra tarefa que você precisa realizar no dia!")
// let listaDeTarefas = [tarefa1, tarefa2, tarefa3]

// console.log (listaDeTarefas)

// let indiceUsuario = Number(prompt("Informe, qual das tarefas você já realizou (0,1 ou 2)?"))
// listaDeTarefas.splice(indiceUsuario,1)
// console.log(listaDeTarefas)

//Desafios
//1.
// let frase = prompt("Digite aqui uma frase qualquer.")
// let palavras = frase.split(" ")
// console.log(palavras , palavras.length)

//2.
// array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(array.indexOf("Abacaxi") , array.length)