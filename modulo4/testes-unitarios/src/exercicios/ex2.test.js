import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retona true para 'A rua Laura'", () => {
    const ehPalindromo = checaPalindromo("arualaura");

    expect(ehPalindromo).toEqual(true)
  })
  // no teste acima, a função falhou porque identifica palíndromos frases, somente palavras

  it("retona true para 'osso'", () => {
    const ehPalindromo = checaPalindromo("osso");

    expect(ehPalindromo).toEqual(true)
  })

  it("retona true para 'boneca'", () => {
    const ehPalindromo = checaPalindromo("boneca");

    expect(ehPalindromo).toEqual(false)
  })

  it("retona true para 'Omissíssimo'", () => {
    const ehPalindromo = checaPalindromo("OmissíssimO");

    expect(ehPalindromo).toEqual(true)
  })
  // no teste acima, a função falhou porque não identifica letras maiúsculas
});
