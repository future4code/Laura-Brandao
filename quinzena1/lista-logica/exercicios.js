// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retângulo'))
  const largura = Number(prompt('Digite a largura do retângulo'))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o ano em que estamos'))
  const anoNascimento = Number(prompt ('Digite o ano do seu nascimento'))

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt('Digite o seu peso em Kg'))
  const altura = Number(prompt('Digite sua altura em metros'))

  console.log(peso / (altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite o seu nome")
  const idade = Number(prompt("Digite a sua idade"))
  const email = prompt("Digite a cidade onde você mora")
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita")
  const cor2 = prompt("Digite outra cor favorita")
  const cor3 = prompt("Digite uma outra cor favorita")

  console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const palavra = prompt("Digite uma palavra")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt("Digite o custo de um espetáculo de teatro")
  const valorIngresso = prompt("Digite o valor de cada ingresso desse espetáculo")

  console.log(custoEspetaculo / valorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite outra palavra")

  console.log (palavra1.length===palavra2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite outra palavra")

  console.log(palavra1.toUpperCase()===palavra2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  let anoAtual = prompt("Digite o ano atual")
  let anoNascimento = prompt("Digite o ano do seu nascimento")
  let anoEmissaoId = prompt("Digite o ano da emissão da sua carteira de identidade")

  const menorOuIgualVinte = ((anoAtual - anoNascimento =< 20) && (anoAtual - anoEmissaoId < 5))
  const vinteEcinquenta = ((anoAtual - anoNascimento =< 50) && (anoAtual - anoEmissaoId < 10))
  const acimaCinquenta = ((anoAtual - anoNascimento > 50) && (anoAtual - anoEmissaoId < 15))

  console.log(menorOuIgualVinte || vinteEcinquenta || acimaCinquenta)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}