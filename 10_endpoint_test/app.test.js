const request = require("supertest");
const app = require("./app");

describe("/continents", () =>
{
    test("GET - it responds with the appropriate continents data", async () =>
    {
        const response = await request(app).get("/continents");
        expect(response.body).toEqual({"continents": ["Asia", "Africa", "Europe", "North America", "South America", "Antarctica", "Australia"]});
        expect(response.status).toBe(200);
    })
})

describe("/continents/1", () =>
{
    test("GET - it responds with the appropriate country data", async() =>
    {
        const response = await request(app).get("/countries/1");
        expect(response.body).toEqual({ country: "France", language: "French", id: "1" });
        expect(response.status).toBe(200);
    })
})