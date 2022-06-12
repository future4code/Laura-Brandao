// Exercício 1
// a.
// const minhaString:string = 3

// Ocorre erro, pois o tipo string não pode receber um number


// b.
// const meuNumero: number | string = "string" 

// Para criar uma variável que aceite mais de um valor, só fazer uso do |


// c.
const pessoa: { name: string, age: number, favoriteColor: string} = {
    name: "Laura",
    age: 32,
    favoriteColor: "blue"
} 

type person = {
    name: string, age: number, favoriteColor: string
}

const pessoa1: person = {
    name: "Flávio",
    age: 31,
    favoriteColor: "green"
}

const pessoa2: person = {
    name: "Thorin",
    age: 3,
    favoriteColor: "golden"
}

const pessoa3: person = {
    name: "Pingo",
    age: 2,
    favoriteColor: "black"
}

// d.

enum favoriteColors {
    violet = "violet",
    indigo = "indigo",
    blue = "blue",
    green = "green",
    yellow = "yellow",
    orange = "orange",
    red = "red"
}

const pessoa4: person = {
    name: "Maria",
    age: 81,
    favoriteColor: favoriteColors.violet
}

console.log(pessoa4)


