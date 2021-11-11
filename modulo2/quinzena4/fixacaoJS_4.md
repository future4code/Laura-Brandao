```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const procuraNumero = arrayDeNumeros.filter(item=>{
    return item === numeroEscolhido
    
  })
  if(procuraNumero.length){
    return `O número ${numeroEscolhido} aparece ${procuraNumero.length}x` 
  }else{return "Número não encontrado"}
}```