// EXERCÍCIO 01
function inverteArray(array) {

  let arrayInvertido = []

  for(let i = array.length-1; i >= 0; i--){
    arrayInvertido.push(array[i])
  }

  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevadoA2 = []

  for(item of array){
    if(item % 2 === 0){
      let numeroElevado = item * item
      numerosParesElevadoA2.push(numeroElevado)
    }
  }
  return numerosParesElevadoA2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []

  for(item of array){
    if(item % 2 ===0){
      numerosPares.push(item)
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(let i = 0; i < array.length; i++){
    let numero = array[i];
    if(numero > maiorNumero){
      maiorNumero = numero;
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  let respostasBooleanos = [booleano1 && booleano2 && !booleano4, 
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)      
  ]

  return respostasBooleanos
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numeroPares = []
  for(let i = 0; i < n; i++){  // percorre até o N que estarão indicando; n= 3-> 0,1,2; n=4-> 0,1,2,3

      numeroPares.push(i*2) // i*2 cria números pares. Ex: 0*2=0; 1*2=2; 2*2=4...
      
  }
  return numeroPares
}

//Outra forma de fazer:
//function retornaNNumerosPares(n) {
//  let numeroPares = []
//  for(let i = 0; i < (n*2); i+=2){
//    numeroPares.push(i)
// }
// return numeroPares
//}

//Para números ímpares: criar números ímpares -> i*2-1
//Ou mudar o for para: for(let i = 1; i < (n*2); i+=2)


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  const todosLadosIguais = "Equilátero"
  const doisLadosIguais = "Isósceles"
  const ladosDiferentes = "Escaleno"

  if(a===b && a===c){
    return todosLadosIguais
  }else if(a!==b && a!==c){
    return ladosDiferentes
  }else{
    return doisLadosIguais
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2){

}

//

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
