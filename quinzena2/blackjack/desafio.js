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
let iniciarJogo = confirm("Bem-vindo ao jogo de Blackjack!\nQuer iniciar uma nova rodada?")
let listaCartaUsuario = []
let listaCartaPc = []


if(iniciarJogo){
   sortearPrimeiraCarta()
   let proximaRodada = true
   let somaCartasUsuario = 0
   let somaCartasPc = 0

   while(proximaRodada){
      listaCartaUsuario.push(comprarCarta())
      if(somaCartasPc < 21){
         listaCartaPc.push(comprarCarta())
      }
      somaCartasUsuario = 0
      listaCartaUsuario.forEach(item =>{
         somaCartasUsuario += item.valor
      })
   
      somaCartasPc = 0
      listaCartaPc.forEach(item =>{
         somaCartasPc += item.valor
      })
      
      if(somaCartasUsuario >= 21 || somaCartasPc >= 21){
         proximaRodada = false
      }else{
         proximaRodada = confirm(`Suas cartas são ${listaCartaUsuario.map(item=>{return item.texto})}. A carta revelada do computador é ${listaCartaPc.slice(0,listaCartaPc.length - 1).map(item=>{return item.texto})}. \nDeseja comprar mais uma carta?`)
      }
   }
   
   let usuarioDiferenca = 21 - somaCartasUsuario
   let pcDiferenca = 21 - somaCartasPc
   let vencedor
   if(usuarioDiferenca < 0){
      vencedor = 'O computador ganhou!'
   }else if (pcDiferenca < 0){
      vencedor = 'O usuário ganhou!'
   }else if(usuarioDiferenca < pcDiferenca){
      vencedor = 'O usuário ganhou!'
   }else if(pcDiferenca < usuarioDiferenca){
      vencedor = 'O computador ganhou!'
   }else{
      vencedor = 'Empate!'
   }

   alert(
      `Usuário - Cartas: ${listaCartaUsuario.map(item=>{return item.texto})} - Pontuação: ${somaCartasUsuario}\n` +
      `Computador - Cartas: ${listaCartaPc.map(item=>{return item.texto})} - Pontuação: ${somaCartasPc}\n` +
      `${vencedor}`
      )
} else{
   confirm("O jogo acabou!")
}


function sortearPrimeiraCarta(){
   listaCartaUsuario[0] = comprarCarta()
   listaCartaPc[0] = comprarCarta()
   
   if(listaCartaUsuario[0] === "A" && listaCartaPc[0] === "A"){
      sortearPrimeiraCarta()
   }
}