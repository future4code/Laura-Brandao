function converteDataAtual() {
  const dataAtual = new Date().getTime();
  const data = new Date(dataAtual * 1);
  const novaData = data.toLocaleDateString();

  return novaData;
}

function renovaCarteira(nascimento: string, emissao: string): boolean {
  const arrayNascimento: string[] = nascimento.split("/")
  const arrayEmissao: string[] = emissao.split("/")
  const arrayDataAtual: string[] = converteDataAtual().split("/")

  const idade: number = Number(arrayDataAtual[2]) - Number(arrayNascimento[2])
  const validadeEmissao: number = Number(arrayDataAtual[2]) - Number(arrayEmissao[2])

  if(idade <= 20 && validadeEmissao >= 5) return true
  else if(idade <= 50 && validadeEmissao >=10) return true
  else if(idade > 50 && validadeEmissao >= 15) return true
  else return false
}

console.log(renovaCarteira("21/01/1990", "15/05/2012"))
