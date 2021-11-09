ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 let comissao =  (qtdeCarrosVendidos*100) + valorTotalVendas * 0.05
  let salarioTotal = salarioFixo + comissao
  return salarioTotal
}ˋˋˋ