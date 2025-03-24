const { fetchGigs, fetchGig } = require("./fetchGig");

describe("fetchGigs", () =>
{
    it("returns a promise for all gigs", async ()=>
    {
        const gigsData = await fetchGigs();
        expect(gigsData).toEqual({
            gigs : [
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
                }]
        })
    })

    it("throws error when server has invalid response", async () =>
    {
        await expect(fetchGigs("http://localhost:9999/broken")).rejects.toThrow();
    });
})

describe("fetchGig with an id", () =>
    {
        it("returns a promise with the corresponding gig", async () =>
        {
            const gigData = await fetchGig(1);
            expect(gigData).toEqual({
                "gig": {
                id: 1,
                name: "Metallica - M72 World Tour",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Metallica_at_The_O2_Arena_London_2008.jpg",
                description: "Metallica's M72 World Tour brings their legendary thrash metal sound to fans worldwide.",
                date: new Date("2025-06-15").toISOString(),
                location: "Wembley Stadium, London, UK"
                }})
        })
    })