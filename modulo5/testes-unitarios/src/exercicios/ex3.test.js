import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("retorna true pra [1, 2 ,1]", () => {
    const resultado = checaItensDuplicados([1, 2, 1]);

    expect(resultado).toBe(true);
  });

  test("retorna false pra [1, 2, 3]", () => {
    const resultado = checaItensDuplicados([1, 2, 3]);

    expect(resultado).toBe(false);
  });

  test("retorna true pra [a, a, b, c]", () => {
    const resultado = checaItensDuplicados(["a", "a", "b", "c"]);

    expect(resultado).toBe(true);
  });

  test("retorna true pra [banana, melão, morango, banana, kiwi]", () => {
    const resultado = checaItensDuplicados(['banana', 'melão', 'morango', 'banana', 'kiwi']);

    expect(resultado).toBe(true);
  });
});
