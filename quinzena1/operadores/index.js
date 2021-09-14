// Exercícios de interpretação de códigos

//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // Então const bool3 será TRUE.

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // O resultado impresso será FALSE.

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // O resultado impresso será FALSE.

// resultado = !resultado && (bool1 || bool2)  // !false && ( true||false) -> true && true -> TRUE
// console.log("c. ", resultado) // O resultado impresso será TRUE.

// console.log("d. ", typeof resultado) // O resultado impresso será BOOLEAN.


//2.Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)
//Nesse código, como os número são Strings, não será realizada a soma.

//3.Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// console.log("Soma:", Number(primeiroNumero) + Number(segundoNumero))

// OU

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)



//Exercícios de escrita de código

//1.
// let idadeUsuario = Number(prompt("Digite sua idade!"))
// let idadeMelhorAmigo = Number(prompt("Digite a idade do(a) seu(sua) melhor amigo(a)!"))
// console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeMelhorAmigo)
// console.log ("Diferença da idade entre você e seu melhor amigo:", idadeUsuario - idadeMelhorAmigo)

//2.
// let numeroParDoUsuario = Number(prompt("Digite aqui um número par!"))
// console.log ("O resto da divisão é:", numeroParDoUsuario % 2)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código. 
//O resto de números pares sempre são 0.
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.
//O resto de números ímpares sempre são 1.

//3.
// let idadeDoUsuario = Number(prompt("Digite sua idade!"))
// console.log ("Sua idade em meses é:", idadeDoUsuario * 12)
// console.log ("Sua idade em dias é:", idadeDoUsuario * 365.25)
// console.log ("Sua idade em horas é:", idadeDoUsuario * (24 * 365.25))

//4.
// let numeroUsuario1 = Number(prompt("Informe um número!"))
// let numeroUsuario2 = Number(prompt("Informe outro número!"))
// console.log ("O primeiro número é maior que segundo?", numeroUsuario1 > numeroUsuario2)
// console.log ("O primeiro número é igual ao segundo?", numeroUsuario1 === numeroUsuario2)
// console.log ("O primeiro número é divisível pelo segundo?", (numeroUsuario1 % numeroUsuario2) === 0)
// console.log ("O segundo número é divisível pelo primeiro?", (numeroUsuario2 % numeroUsuario1) === 0)
