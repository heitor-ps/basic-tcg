const request = require("supertest");
const app = require("../../app");

describe("Test cards paths", () => {
  test("Create new card", async () => {
    const newCard = {
      name: "Black Magician",
      type: "monster",
      attack: 1250,
      defense: 2000,
      effect: {
        description: "Any text here",
        summon_requirement: 0,
      },
      summon_cost: 5,
      image: "black.png",
    };
    const response = await request(app).post("/api/card").send(newCard);
    expect(response.statusCode).toBe(201);
    expect(typeof response.body).toBe(Object);

    expect(response.body.id).toBe(1);
    expect(response.body.attack).toBe(newCard.attack);
    expect(response.body.defense).toBe(newCard.defense);
  });

  test("Getting a card", async () => {
    const response = await request(app).get("/api/card/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body.name).toBe("Black Magician");
  });

  test("Getting a card", async () => {
    const response = await request(app).get("/api/card/abc");
    expect(response.statusCode).toBe(503);
    expect(response.body.error.message).toBe("Card id should be a number!");
  });

  test("Update an existent card", async () => {
    const card = {
      id: 1,
      attack: 2500,
    };
    const response = await request(app).put("/api/card/1").send(card);
    expect(response.statusCode).toBe(200);
  });

  test("Delete an existent card", async () => {
    const response = await request(app).del("/api/card/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Card successfully deleted");
  });
});
