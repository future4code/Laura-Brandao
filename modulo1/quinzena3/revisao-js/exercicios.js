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
  let maior
  let menor
    if (num1 > num2){
      maior = num1
      menor = num2
    }else{
      maior = num2
      menor = num1
    }
  let maiorDivisivelPorMenort = maior % menor === 0
  let diferencat = maior - menor
  objeto = {maiorNumero: maior, maiorDivisivelPorMenor: maiorDivisivelPorMenort, diferenca: diferencat}
  return objeto
}

//

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maiorDeTodos = Number.MIN_SAFE_INTEGER 
  let segundoMaiorDeTodos = Number.MIN_SAFE_INTEGER + 1
  let menorDeTodos = Number.MAX_SAFE_INTEGER
  let segundoMenorDeTodos = Number.MAX_SAFE_INTEGER -1

array.forEach(elemento => {
  if(elemento>maiorDeTodos){
    segundoMaiorDeTodos = maiorDeTodos
    maiorDeTodos = elemento
  }else if(elemento>segundoMaiorDeTodos){
    segundoMaiorDeTodos = elemento
  }

  if(elemento<menorDeTodos){
    segundoMenorDeTodos = menorDeTodos
    menorDeTodos = elemento
  }else if(elemento<segundoMenorDeTodos){
    segundoMenorDeTodos = elemento
  }
});

let segundoMaiorEmenor = [segundoMaiorDeTodos, segundoMenorDeTodos]
return segundoMaiorEmenor
//   const novaArray = []

//   for(item of array){
//     let contador = 0
//     for (itemComparado of array){
//       if(item > itemComparado){
//         contador ++
//       }
//     }
//     novaArray[contador] = item    
//   }
// return [novaArray[novaArray.length-2], novaArray[1]]
}

// EXERCÍCIO 11
function ordenaArray(array){

const novaArray = []

  for(item of array){
    let contador = 0
    for (itemComparado of array){
      if(item > itemComparado){
        contador ++
      }
    }
    novaArray[contador] = item    
  }
  return novaArray
}

// EXERCÍCIO 12
function filmeFavorito() {
objeto={
  nome:"O Diabo Veste Prada",
  ano: 2006,
  diretor:"David Frankel",
  atores:['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}
return objeto
}

// EXERCÍCIO 13
function imprimeChamada() {
  objeto={
    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor:"David Frankel",
    atores:['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
  }
  return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
 const objeto = {
   largura: lado1,
   altura: lado2,
   perimetro: (2 * (lado1 + lado2)),
   area:lado1 * lado2
 }
 return objeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {...pessoa, nome:"ANÔNIMO"}
  return pessoaAnonima
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let pessoasMaisDe18 = []
  arrayDePessoas.forEach(element => {
    if(element.idade >= 18){
      pessoasMaisDe18.push(element)
    }
  });
  return pessoasMaisDe18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let pessoasMenosDe18 = []
  arrayDePessoas.forEach(elemento => {
    if(elemento.idade < 18){
      pessoasMenosDe18.push(elemento)
    }
  });
  return pessoasMenosDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let numerosMultiplicadosPor2 = []
  for(item of array){
    numerosMultiplicadosPor2.push(item * 2)
  }
  return numerosMultiplicadosPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let numerosMultiplicadosPor2 = []
  for(item of array){
    item2 = item * 2
    numerosMultiplicadosPor2.push(String(item2))
  }
  return numerosMultiplicadosPor2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let numerosParesDaArray = []
  array.forEach(elemento => {
    if(elemento % 2 === 0){
      numerosParesDaArray.push(`${elemento} é par`)
    }else{
      numerosParesDaArray.push(`${elemento} é ímpar`)
    }
  });
  return numerosParesDaArray
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
