//Exercícios de interpretação de código

//1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/*let a = 10
let b = 10
console.log(b)*/

//Será impresso o número 10

/*b = 5
console.log(a, b)*/

//Será impresso 10 e 5

//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/*let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)*/

//Será impresso 10, 10 e 10

//3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)*/

//O programa pedirá ao usuário para informar quantas horas trabalha por dia e quanto recebe por dia, e informará para ele quanto recebe por hora
//p= horasTrabalhadasPorDia
//t= salárioPorDia


//Exercícios de escrita de código

//1.
let nome
console.log (typeof nome)
let idade
console.log (typeof idade)
//Foi impresso na tela undefined porque as variáveis não tiveram nenhum valor declarado.

let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")
console.log (typeof nome)
console.log (typeof idade)
//Os tipos das variáveis mudaram para string. O comando "prompt" sempre retorna string, mesmo que a variável seja number.

let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é sua idade?")
console.log ("Olá,", nome, "você tem", idade, "anos")



//2.
const pergunta1 = "Você tomou água hoje?"
const pergunta2 = "Você trabalhou hoje?"
const pergunta3 = "Você estudou hoje?"

const separador = " - "

const resposta1 = "Sim"
const resposta2 = "Não"
const resposta3 = "Sim"

console.log (pergunta1, separador, resposta1)
console.log (pergunta2, separador, resposta2)
console.log (pergunta3, separador, resposta3)



//3.
let a = 10
let b = 25

console.log("O valor de a é", a) 
console.log("O valor de b é", b)

let temp = a 
a = b 
b = temp

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 


