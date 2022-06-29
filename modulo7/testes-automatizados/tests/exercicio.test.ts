import { performPurchase } from "../src/exercicio";
import { User } from "../src/model/user";

test.skip("Testing balance greater than value", () => {
    const user: User = {
        name: "Laura",
        balance: 100
    }
    const result = performPurchase(user, 40)

    expect(result).toEqual({
        name: "Laura",
        balance: 60
    })
});

test.skip("Testing balance equal to value", () => {
    const user: User = {
        name: "Laura",
        balance: 50
    }
    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 0
    })
});

test("Testing balance less than value", () => {
    const user: User = {
        name: "Laura",
        balance: 30
    }
    const result = performPurchase(user, 50)

    expect(result).not.toBeDefined()
});