export const isEven = (n: number) => {
    return n % 2 === 0;
}

export const myAsyncFunc = async () => {
    return 7;
};

// myAsyncFunc().then(res => console.log(res)); // res é um number

type myAsyncFuncType = () => Promise<number>;

export const LoginUseCase = async (email: string) => {
    // obter usuário do banco de dados
    // comparar senha
    // produzir um jwt token
    if(email !== "teste") { // se não existir no banco de dados 
        throw new Error("Email inexistente")
    }
    return {
        id: 7,
        name: 'teste'
    }
}

// -D --save-dev
// console.log(isEven(8));

const tests = () => {
    const casosDeTeste = [
        { input: 7, output: false },
        { input: 8, output: true },
        { input: 4.5, output: false }
    ];

    casosDeTeste.forEach(casoDeTeste => {
        const result = isEven(casoDeTeste.input);
        console.log(`Entrada ${casoDeTeste.input} espera saída ${casoDeTeste.output} 
            e a saída foi ${result}. Passou? ${casoDeTeste.output === result}`);
    });
}

// tests();
