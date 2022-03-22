function checaRenovacaoRG():string {
    const anoAtual:number = Number(prompt("Digite o ano atual"))
    const anoNascimento:number = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"))
 
    let idade:number = anoAtual - anoNascimento
    let tempoCarteira:number = anoAtual - anoEmissao
 
    if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
 
   }else if(anoNascimento >= 20 || anoNascimento <= 49) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
 
   }else if(anoNascimento > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
 
     }else {
         return "error"
     }
}