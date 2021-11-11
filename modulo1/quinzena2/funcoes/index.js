//Exercícios de interpretação de código

//1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//Será impresso os valores das multiplicações, 5*2=10 e 5*10=50
//Se retirassem os console.log e invocasse a função minhaFuncao(2) e minhaFuncao(10), a operação será feita mas não serão impressos nenhum dos valores das multiplicações.


//2.
//a. Explique o que essa função faz e qual é sua utilidade
//A função pega um texto, coloca todas as letras em caixa baixa e busca se nessa frase possui a palavra cenoura, retornando true ou false.
//b.
//i. true ii. true iii. true




//Exercícios de escrita de código

//1.
//a.
// function sobreMim(){
//     const nome = "Laura"
//     const idade = 31
//     const cidade = "Belo Horizonte"
//     const profissao = "estudante"
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}.`
    
// }

// console.log (sobreMim())
//b.
// function sobreUsuario(){
//     const nome = prompt("Digite o seu nome")
//     const idade = Number(prompt("Digite a sua idade"))
//     const cidade = prompt("Digite a cidade onde você mora")
//     const profissao = prompt("Digite a sua profissão")
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}.`
    
// }

// console.log (sobreUsuario())


//2.
//a.
// function funcao(numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
//   }

//  console.log(funcao(Number(prompt("Digite um número")),Number(prompt("Digite outro número"))))

//b.
// function funcao(numero1, numero2){
//     const resultado = numero1 >= numero2
//     return resultado
//   }

//   const numero1 = Number(prompt("Digite um número"))
//   const numero2 = Number(prompt("Digite outro número"))
//  console.log(funcao(numero1, numero2))

//c.
// function funcao(numero){
//     const paridade = numero % 2 === 0
//     return paridade
//   }

//  const numero = Number(prompt("Digite um número"))
//  console.log(funcao(numero))

//d.
// function imprimeMensagem(mensagem){
//     const tamanhoMensagem = mensagem.length
//     const mensagemMaiuscula = mensagem.toUpperCase()
//     console.log (tamanhoMensagem, mensagemMaiuscula)
// }

// imprimeMensagem(prompt("Digite uma frase"))

//3
// function soma(n1,n2){
//    return n1 + n2
// }
// function diferenca(n1,n2){
//     return n1 - n2
// }
// function multiplicacao(n1,n2){
//     return n1 * n2
// }
// function divisao(n1,n2){
//     return n1 / n2
// }
// let numero1 = Number(prompt("Digite um número."))
// let numero2 = Number(prompt("Digite outro número."))
// console.log(soma(numero1,numero2), diferenca(numero1,numero2), multiplicacao(numero1,numero2), divisao(numero1,numero2))