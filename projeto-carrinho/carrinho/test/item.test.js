/* eslint-disable quotes */
import Item from "../item.js";

describe("Item tests", () => {
  it("Should have three fields: Name, value and quantity.", () => {
    const item = new Item("Beetroot", 2.5, 10);

    expect(item.nome).toBe("Beetroot");
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it("Should have the price calculated according to the quantity.", () => {
    const item = new Item("Potato", 0.3, 10);

    /* The "toBeCloseTo" is used to approach to the result. */
    expect(item.pegaValorTotalItem()).toBeCloseTo(3);
  });
});
