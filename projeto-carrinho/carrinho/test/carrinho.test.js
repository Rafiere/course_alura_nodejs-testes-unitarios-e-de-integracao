/* eslint-disable quotes */
import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Shopping cart tests", () => {
  it("Should initialize empty.", () => {
    const shoppingCart = new Carrinho();

    expect(shoppingCart.subtotal).toBeNull();
  });

  it("Should have items.", () => {
    const item = new Item("Banana", 2, 5);

    const item2 = new Item("Apple", 0.5, 1);

    const shoppingCart = new Carrinho();

    shoppingCart.adiciona(item);
    shoppingCart.adiciona(item2);

    expect(typeof shoppingCart).toBe("object");
    expect(shoppingCart.itens[0]).toBe(item);
    expect(shoppingCart.itens[1]).toBe(item2);

    /* Or (using arrays matcher): */
    expect(shoppingCart.itens).toContain(item);
    expect(shoppingCart.itens).toContain(item2);
  });

  it("Should have property 'total' at inicialization.", () => {
    const shoppingCart = new Carrinho();

    expect(shoppingCart).toHaveProperty("total");
  });

  it("Should throw an error if the checkout was done with an empty shopping cart.", () => {
    const emptyShoppingCartContainer = () => {
      const shoppingCart = new Carrinho();

      shoppingCart.finalizaCompra();
    };

    expect(emptyShoppingCartContainer).toThrowError(
      "Carrinho de compras vazio"
    );
  });

  it("Should add the shipping", () => {
    const shoppingCart = new Carrinho();

    shoppingCart.adicionaFrete(10);

    expect(shoppingCart.frete).toBe(10);
  });

  it("Should finalize the purchases", () => {
    const item = new Item("Banana", 2, 5);

    const item2 = new Item("Honey", 1, 5);

    const shoppingCart = new Carrinho();

    shoppingCart.adiciona(item);
    shoppingCart.adiciona(item2);
    shoppingCart.adicionaFrete(10);

    /* "toStrictEqual" will compare the content of the objects. */
    expect(shoppingCart.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});
