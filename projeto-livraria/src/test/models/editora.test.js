import Editora from "../../models/editora";
import { jest } from "@jest/globals";

describe("Testing 'Editora' model", () => {
  /* A literal object to represent the "Editora". */
  const editoraObject = {
    nome: "CDC",
    cidade: "Sao Paulo",
    email: "c@c.com",
  };

  it("Should instantiate a new Editora", () => {
    const editora = new Editora(editoraObject);

    /* We're using the "toEqual" and "nested expect", using the "objectContaining" for compare two objects. */
    expect(editora).toEqual(expect.objectContaining(editoraObject));
  });

  /* The "skip" will skip the test. */
  it.skip("Should save Editora in DB.", () => {
    const editora = new Editora(editoraObject);

    /* We're testing an async method (returns a Promise). */
    editora.salvar().then((dados) => {
      expect(dados.nome).toBe("CDC");
    });
  });

  /* This test is making a change to the real database, and that's bad.  */
  it.skip("Should save in DB using the modern syntax", async () => {
    const editora = new Editora(editoraObject);

    const dados = await editora.salvar();

    const returned = await Editora.pegarPeloId(dados.id);

    expect(returned).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editoraObject,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });

  it("Should make a simulated database call.", () => {
    const editora = new Editora(editoraObject);

    /* This is a mock under the table. */
    // editora.salvar = () => {
    //   console.log("Editora has been saved in the database.");
    // };

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: "CDC",
      cidade: "Sao Paulo",
      email: "c@c.com",
      created_at: "2022-10-01",
      updated_at: "2022-10-01",
    });

    const returned = editora.salvar();

    expect(returned).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editoraObject,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
