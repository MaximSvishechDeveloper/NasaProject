import supertest from "supertest";
import app from "../../server.js";

const request = supertest(app);

describe("Test GET /launches", () => {
  test("should respond with 200 success", async () => {
    await request.get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  test("should  respond with 200 success", () => {});
  test("should catch missing required properties", () => {});
  test("should catch invalid dates", () => {});
});
