const request = require("supertest");
const app = require("./app");

describe("/gigs", () =>
{
    test("GET-it responds with the gig objects", async () =>
    {
        const response = await request(app).get("/gigs");
        expect(response.body).toEqual({"gigs": [
            {
                id: 1,
                name: "Metallica - M72 World Tour",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Metallica_at_The_O2_Arena_London_2008.jpg",
                description: "Metallica's M72 World Tour brings their legendary thrash metal sound to fans worldwide.",
                date: new Date("2025-06-15").toISOString(),
                location: "Wembley Stadium, London, UK"
            }, 
            {
                id: 2,
                name: "In Flames - Foregone Tour",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/55/In_Flames_-_2018.jpg",
                description: "Swedish melodic death metal band In Flames rocks the stage with their latest album, Foregone.",
                date: new Date("2025-09-10").toISOString(),
                location: "O2 Academy, Birmingham, UK"
            }, 
            {
                id: 3,
                name: "Blind Guardian - The God Machine Tour",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Blind_Guardian_Tuska_2011.jpg",
                description: "Blind Guardian returns with a fantasy-driven power metal spectacle on The God Machine Tour.",
                date: new Date("2025-11-25").toISOString(),
                location: "Royal Albert Hall, London, UK"
            }]});
            expect(response.status).toBe(200);
    });
});

describe("/gigs/:id", () =>
{
    test("GET- responds with the id:1 of the event", async () =>
    {
        const response = await request(app).get("/gigs/1");
        expect(response.body).toEqual({"gig": {
            id: 1,
            name: "Metallica - M72 World Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Metallica_at_The_O2_Arena_London_2008.jpg",
            description: "Metallica's M72 World Tour brings their legendary thrash metal sound to fans worldwide.",
            date: new Date("2025-06-15").toISOString(),
            location: "Wembley Stadium, London, UK"
        }});
        expect(response.status).toBe(200);
    });
});

describe("/gigs/:id", () =>
{
    test("DELETE-deletes the gig with the id 1", async () =>
    {
        const getAllresponse = await request(app).get("/gigs");
        const initalGigs = getAllresponse.body.gigs;
        expect(initalGigs.length).toBeGreaterThan(0);
        const deleteResponse = await  request(app).delete("/gigs/1");
        expect(deleteResponse.body).toEqual({
            message: "Successfully deleted gig",
            gigs: expect.any(Array)
        })
        expect(deleteResponse.body.gigs.length).toBe(initalGigs.length - 1);
        expect(deleteResponse.body.gigs.some(gig => gig.id === 1)).toBe(false);
    });

    test("should return 404 if gig is not found", async () => {
        const response = await request(app).delete("/gigs/999"); // Non-existent gig
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Gig not found" });
    });
})

describe("/gigs", () =>
{
    test("POST-responds to adding a new gig to the array", async () =>
    {
    const newGig = 
    {
        id: 4,
        name: "Iron Maiden - Legacy of the Beast Tour",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Iron_Maiden_2018.jpg",
        description: "Iron Maiden delivers a spectacular metal experience with their legendary hits.",
        date: new Date("2025-12-10").toISOString(),
        location: "O2 Arena, London, UK"
    };
    const response = await request(app)
                    .post("/gigs")
                    .send({ "gig": newGig })
                    .expect(201);
    expect(response.body).toEqual({
        message: "Successfully posted new gig",
        gigs: expect.arrayContaining([expect.objectContaining(newGig)])
    });

    const getResponse = await request(app).get("/gigs");
    expect(getResponse.body).toEqual({
        gigs: [
        {
            id: 1,
            name: "Metallica - M72 World Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Metallica_at_The_O2_Arena_London_2008.jpg",
            description: "Metallica's M72 World Tour brings their legendary thrash metal sound to fans worldwide.",
            date: new Date("2025-06-15").toISOString(),
            location: "Wembley Stadium, London, UK"
        }, 
        {
            id: 2,
            name: "In Flames - Foregone Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/55/In_Flames_-_2018.jpg",
            description: "Swedish melodic death metal band In Flames rocks the stage with their latest album, Foregone.",
            date: new Date("2025-09-10").toISOString(),
            location: "O2 Academy, Birmingham, UK"
        }, 
        {
            id: 3,
            name: "Blind Guardian - The God Machine Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Blind_Guardian_Tuska_2011.jpg",
            description: "Blind Guardian returns with a fantasy-driven power metal spectacle on The God Machine Tour.",
            date: new Date("2025-11-25").toISOString(),
            location: "Royal Albert Hall, London, UK"
        },
        {
            id: 4,
            name: "Iron Maiden - Legacy of the Beast Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Iron_Maiden_2018.jpg",
            description: "Iron Maiden delivers a spectacular metal experience with their legendary hits.",
            date: new Date("2025-12-10").toISOString(),
            location: "O2 Arena, London, UK"
        }]})
    });

    test("should return 400 if newGig is invalid to post", async () => {
        const newGig = 
        {
            name: "Iron Maiden - Legacy of the Beast Tour",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Iron_Maiden_2018.jpg",
            description: "Iron Maiden delivers a spectacular metal experience with their legendary hits.",
            date: new Date("2025-12-10").toISOString(),
            location: "O2 Arena, London, UK"
        };
        const response = await request(app).post("/gigs");
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid gig data" });
    });
});