import { isEven, myAsyncFunc, LoginUseCase } from '.';

describe.skip("Testes unitários da função isEven", () => {

    test("Retorna true para 8", () => {
        const result = isEven(8);
        expect(result).toEqual(true);
    });

    test("Retorna false para 7", () => {
        const result = isEven(7);
        expect(result).toBe(false);

    });

    test("Retorna false para 4.5", () => {

    });
    // it()
});

describe.skip("Mostrando os matchers", () => {
    it("toEqual", () => {
        const result = [1,2,3];
        expect(result).toEqual([1,2,3]);
        // expect(result).toBe([1,2,3]);
    });

    it("toBeGreaterThan", () => {
        const result = 7;
        expect(result).toBeGreaterThan(0);
    });

    it("toBeLessThanOrEqual", () => {
        const result = -7;
        expect(result).toBeLessThanOrEqual(0);
    });

    it("toContain", () => {
        const result = [1, true, "teste"];
        expect(result).toContain("teste");
    });

    it("toContainEqual", () => {
        const result = [1, true, { id: '7', name: 'teste'}];
        expect(result).toContainEqual({ id: '7', name: 'teste'});
    });

    it("not", () => {
        const result = [1, true, "teste"];
        expect(result).not.toContain("teste 2");
    });
});

describe.skip("Funções assíncronas", () => {

    beforeAll(() => {}); // executada antes de todos os testes
    afterAll(() => {}); // executada depois de todos os testes

    test("função async", async () => {
        const result = await myAsyncFunc();
        expect(result).toBeGreaterThan(0)
    });
});

describe.skip("Testando erros", () => {

    test("Login UseCase deve lançar um erro se o e-mail for incorreto", async () => {
        expect.assertions(1);
        try {
            const result = await LoginUseCase('diferente');
            // expect(result).toMatchObject({ name: 'test' })
        } catch (e: any) {
            expect(e.message).toBe("Email inexistente");
        }
    })
});

