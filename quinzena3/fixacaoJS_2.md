ˋˋˋfunction calculaPrecoTotal(quantidade) {
  let preco
  if(quantidade < 12){
    preco = 1.3
  }else if (quantidade >= 12){
    preco = 1
  }
  let precoTotal = quantidade * preco
  return precoTotal
}ˋˋˋ