function devolveQuantidadeDeAnagrama(palavra: string): number {
    const arraySilabas = palavra.split("")
    let quantidadeSilabas = arraySilabas.length


    for(let i = 1; i < arraySilabas.length; i++){
        quantidadeSilabas *= i
    }

    return quantidadeSilabas
}

console.log(devolveQuantidadeDeAnagrama("mesa"))