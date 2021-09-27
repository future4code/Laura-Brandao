//Exercícios de interpretação de código

//1
//a. O código pede um número para o usuário e verifica se ele é divisível por 2, se for ele dará a mensagem "Passou no teste", se não, dará a mensagem "Não passou no teste".
//b. Números divisíveis por 2.
//c. Números não divisíveis por 2.

//2
//a. O código serve para dar preço para as frutas que o usuário pedir, algumas específicas com preços específicos, e o restante das frutas com um preço único. O código utiliza o formato switch case, deixando de uma forma mais simplificada.
//b. 2,25
//c. Se retirar o break, a mensagem impressa será 5.

//3
//a. Transformando uma string, dada pelo usuário, em number.
//b. Digitando o número 10, aparece a mensagem "Esse número passou no teste" e um erro.
// Digitando o número -10, aparece só a mensagem de erro.
//c. Sim, pois a variável mensagem foi declarada dentro do escopo filho e pedida para ser impressa fora dele.



//Exercícios de escrita de código

//1.
// let idadeUsuario = Number(prompt("Digite sua idade"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir.")
// }else{
//     console.log("Você não pode dirigir.")
// }

//2.
// let periodoDeEstudo = prompt("Digite aqui em qual turno do dia você estuda (Utilize M para matutino, V para Vespertino, ou N para Noturno)").toUpperCase()

// if (periodoDeEstudo === "M"){
//     console.log("Bom dia!")
// }else if (periodoDeEstudo === "V"){
//     console.log("Boa tarde!")
// }else if (periodoDeEstudo === "N"){
//     console.log("Boa noite!")
// }else{
//     console.log("Período não encontrado. Digite M, V ou N.")
// }

//3.

// let periodoDeEstudo = prompt("Digite aqui em qual turno do dia você estuda (Utilize M para matutino, V para Vespertino, ou N para Noturno)").toUpperCase()
// switch (periodoDeEstudo){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Período não encontrado. Digite M, V ou N.")
//         break
// }

//4.
// let generoFilmeUsuario = prompt("Qual gênero de filme você assistirá no cinema?").toLowerCase()
// let precoIngresso = Number(prompt("Qual o preço do ingresso do filme escolhido?"))

// if (generoFilmeUsuario === "fantasia" && precoIngresso <= 15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }



//Desafios
//1.
// let generoFilmeUsuario = prompt("Qual gênero de filme você assistirá no cinema?").toLowerCase()
// let precoIngresso = Number(prompt("Qual o preço do ingresso do filme escolhido?"))
// let lancheUsuario = prompt("Qual lanche você irá comprar para assistir ao filme?")

// if (generoFilmeUsuario === "fantasia" && precoIngresso <= 15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }

// console.log(`Aproveite o/a seu/sua ${lancheUsuario}!`)

//2.
// let nomeUsuario = prompt("Digite o seu nome completo!")
// let tipoJogo = prompt("Indique se o jogo é internacional (IN) ou doméstico (DO).")
// let etapaDoJogo = prompt("Indique se o jogo é Semi-final (SF),decisão de terceiro-lugar (DT), ou final (FI).")
// let categoria = Number(prompt("Categorias: 1, 2, 3 ou 4!"))
// let quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos que serão comprados."))

// const tabelaDePreco = [
//     1320, 880, 550, 220,
//     660, 440, 330, 170,
//     1980, 1320, 880, 330
// ]

// if (etapaDoJogo ==="SF" && categoria === 1){
//     valorIngresso = tabelaDePreco[0] 
// }else if (etapaDoJogo === "SF" && categoria === 2){
//     valorIngresso = tabelaDePreco[1] 
// }else if (etapaDoJogo ==="SF" && categoria === 3){
//     valorIngresso = tabelaDePreco[2] 
// }else if (etapaDoJogo ==="SF" && categoria === 4){
//     valorIngresso = tabelaDePreco[3] 
// }if (etapaDoJogo ==="DT" && categoria === 1){
//     valorIngresso = tabelaDePreco[4] 
// }else if (etapaDoJogo ==="DT" && categoria === 2){
//     valorIngresso = tabelaDePreco[5] 
// }else if (etapaDoJogo ==="DT" && categoria === 3){
//     valorIngresso = tabelaDePreco[6] 
// }else if (etapaDoJogo ==="DT" && categoria === 4){
//     valorIngresso = tabelaDePreco[7] 
// }if (etapaDoJogo ==="FI" && categoria === 1){
//     valorIngresso = tabelaDePreco[8] 
// }else if (etapaDoJogo ==="FI" && categoria === 2){
//     valorIngresso = tabelaDePreco[9] 
// }else if (etapaDoJogo ==="FI" && categoria === 3){
//     valorIngresso = tabelaDePreco[10] 
// }else if (etapaDoJogo ==="FI" && categoria === 4){
//     valorIngresso = tabelaDePreco[11] 
// }

// let valorTotal = valorIngresso * quantidadeIngressos

// function conversaoDolar (valor){
//     return valor / 4.1
// }

// function imprimeNota (nome, tipoJogo, etapaJogo, categoria, quantidadeIngressos, precoIngresso, precoTotal){
//     let moeda 
//     let precoIngressoFinal
//     let precoTotalFinal
//     let nomeTipoJogo
    
//     if(tipoJogo === "DO"){
//         moeda = "R$"
//         precoIngressoFinal = precoIngresso
//         precoTotalFinal = precoTotal
//         nomeTipoJogo = "Nacional"
//     }else if(tipoJogo === "IN"){
//         moeda = "U$"
//         precoIngressoFinal = conversaoDolar(precoIngresso)
//         precoTotalFinal = conversaoDolar(precoTotal)
//         nomeTipoJogo = "Internacional"
//     } 
    
//     let nomeEtapaJogo

//     if(etapaJogo === "SF"){
//         nomeEtapaJogo = "Semifinais"
//     }else  if(etapaJogo === "DT"){
//         nomeEtapaJogo = "Decisão do 3o lugar"
//     } else if (etapaJogo === "FI"){
//         nomeEtapaJogo = "Final"
//     }
        
//     console.log(`---Dados da compra--- 
//     Nome do cliente:  ${nome} 
//     Tipo do jogo:  ${nomeTipoJogo} 
//     Etapa do jogo:  ${nomeEtapaJogo} 
//     Categoria:  ${categoria} 
//     Quantidade de Ingressos:  ${quantidadeIngressos} 
//     ---Valores--- 
//     Valor do ingresso:  ${moeda} ${precoIngressoFinal}
//     Valor total:  ${moeda} ${precoTotalFinal}`)
// }

// imprimeNota(nomeUsuario, tipoJogo, etapaDoJogo, categoria, quantidadeIngressos, valorIngresso, valorTotal )