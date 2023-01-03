import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import app from "../../app.js";

import request from "supertest";
import { response } from "express";

/* Within this file, we will validate that the routes are working as desired. */

/* Jest hooks allow certain code to be executed before and after tests are executed. */

/* We call a "hook" a function or method that is called when we want to give the program a specific behavior in some certain circumstance - for example, before, during or after certain code is executed. */

/* "beforeEach()" and "afterEach()" are hooks that are executed at certain times or events that occur in the program and allow the program's behavior to react to these events, changing the code that will be executed or executing some specific code. */

let server;

/* Before each is a hook. */
beforeEach(() => {
  const port = 3001;
  server = app.listen(port);
});

/* After each test, the server connection will be closed. */
afterEach(() => {
  server.close();
});

describe("GET method in /editoras", () => {
  it("Should return a list of 'Editoras'", async () => {
    /* We're verifying if the status code "200" is returned. */
    const response = await request(app)
      .get("/editoras")
      /* We're setting the "Accept" header of the requisition. */
      .set("Accept", "application/json")
      /* We're verifying if the "content-type" header that was returned from the response matching the RegEx "/json/". */
      .expect("content-type", /json/)
      .expect(200);

    expect(response.body[0].email).toEqual("e@e.com");
  });
});

let idResponse;
describe("POST method in /editoras", () => {
  it("Should add a new 'Editora'", async () => {
    const response = await request(app)
      .post("/editoras")
      .send({
        nome: "CDC",
        cidade: "Sao Paulo",
        email: "s@s.com",
      })
      .expect(201);
    idResponse = response.body.content.id;
  });
});

describe("DELETE method in /editoras/id", () => {
  it("Should delete the added resource", async () => {
    await request(app).delete(`/editoras/${idResponse}`).expect(200);
  });
});

describe("GET method in /editoras/:id", () => {
  it("Should return the specified 'Editoras' object.", async () => {
    /* We're verifying if the status code "200" is returned. */
    const response = await request(app)
      .get(`/editoras/${idResponse}`)
      /* We're setting the "Accept" header of the requisition. */
      .set("Accept", "application/json")
      /* We're verifying if the "content-type" header that was returned from the response matching the RegEx "/json/". */
      .expect("content-type", /json/)
      .expect(200);
  });
});
