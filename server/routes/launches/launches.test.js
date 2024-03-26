import supertest from "supertest";
import app from "../../server.js";
import { response } from "express";

const request = supertest(app);

describe("Test GET /launches", () => {
  test("should respond with 200 success", async () => {
    await request.get("/launches").expect("Content-Type", /json/).expect(200);
  });
});

describe("Test POST /launches", () => {
  const dataWithDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    destination: "Kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const dataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    destination: "Kepler-186 f",
  };

  test("should  respond with 201 success", async () => {
    const response = await request
      .post("/launches")
      .send(dataWithDate)
      .expect(201);

    const requestDate = new Date(dataWithDate.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(dataWithoutDate);
  });

  test("should catch missing required properties", () => {});
  test("should catch invalid dates", () => {});
});
