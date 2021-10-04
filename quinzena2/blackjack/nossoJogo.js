/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Boas vindas ao jogo de Blackjack!")


// if(confirm("Quer iniciar uma nova rodada?")) {
// 	iniciarPartida()
// } else {
// 	console.log("O jogo acabou!")
// }

// function iniciarPartida(){
//    const cartaUsuario = comprarCarta();
//    const cartaUsuarioDois = comprarCarta();
//    const pontosUsuario = cartaUsuario.valor + cartaUsuarioDois.valor
//    const cartaComputador = comprarCarta();
//    const cartaComputadorDois = comprarCarta();
//    const pontosComputador = cartaComputador.valor + cartaComputadorDois.valor

//    console.log(`Usuário - cartas ${cartaUsuario.texto} ${cartaUsuarioDois.texto} - pontuação ${pontosUsuario}`)
//    console.log(`Computador - cartas ${cartaComputador.texto} ${cartaComputadorDois.texto} - pontuação ${pontosComputador}`)

//    const usuarioVencedor = pontosUsuario > pontosComputador
//    const computadorVencedor = pontosComputador > pontosUsuario
//    const empate = pontosUsuario === pontosComputador

//    if(usuarioVencedor){
//       console.log("O usuário ganhou!")
//    }else if (computadorVencedor){
//       console.log("O computador ganhou!")
//    }else if (empate){
//       console.log("Empate!")
//    }else{
//       console.log("O jogo acabou!")
//    }
// }

