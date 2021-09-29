//Exercícios de interpretação de código
//1.
//O código a cada vez que roda, aumenta em 1 o valor de i e soma com a variável "valor", que inicialmente é igual a 0.
//Resultado impresso: 10

//2.
//a. Serão impressos somente números maiores que 18, da array lista.
//b. 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(numero)
// 	}

//3.
//Será impresso:
// *
// **
// ***
// ****



//Exercícios de escrita de código

//1.
// let numeroDeBichosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if(numeroDeBichosUsuario === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//         listaDeBichinhos = []
//     for (let index = 0; index < numeroDeBichosUsuario; index++){
//         let nomeBichinho = prompt("Digite o nome do seu bichinho!")
//         listaDeBichinhos[index] = nomeBichinho
//     }
//     console.log(listaDeBichinhos)
// }

//2.
// arrayOriginal = [10,40,90,4,7,1]

//a.

// function imprimeElemento (array){
//     for (let i = 0; i < array.length; i++){
//         const elemento = array[i]
//         console.log(elemento)
//     }
// }
// imprimeElemento(arrayOriginal)

//b.

// function imprimeElementoDivididoPorDez (array){
//     for (let i = 0; i < array.length; i++){
//         const elemento = array[i]
//         console.log(elemento / 10)
//     }
// }
// imprimeElementoDivididoPorDez(arrayOriginal)

//c.

// function comparaPar (numero){
//     return (numero % 2) === 0;
// }

// let novoArrayPares = arrayOriginal.filter(comparaPar);
// console.log(novoArrayPares);

//d.

// novoArray = []
// function imprimeNovoArray (array){
//     for(let i = 0; i < array.length; i++){
//         novoArray[i] = `O elemento do índex ${i} é: ${array[i]}`
//     }
//     console.log(novoArray)
// }
// imprimeNovoArray(arrayOriginal)

//e.

// function retornaValores (array){
//     let maiorNumero = array[0];
//     for (let i = 0; i < array.length; i++){
//         const numeroDaVez = array[i];
//         if(numeroDaVez > maiorNumero){
//             maiorNumero = numeroDaVez;
//         }
//     }
//     let menorNumero = array[0];
//     for (let i = 0; i < array.length; i++){
//         const numeroDaVez = array[i];
//         if(menorNumero > numeroDaVez){
//             menorNumero = numeroDaVez;
//         }
//     }

//     console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
// }

// retornaValores(arrayOriginal)