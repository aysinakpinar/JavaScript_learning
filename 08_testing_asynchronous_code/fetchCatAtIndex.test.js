const fetchCatAtIndex = require("./fetchCatAtIndex")

describe("fetchCatAtIndex", () => {
    it("returns a promise with the appropriate cat data when there is a cat at the index", async () => {
        const catData = await fetchCatAtIndex(2);
        expect(catData).toEqual("Siamese");
    });

    it("throws an error when the index input is not a number", async () => { 
        await expect(fetchCatAtIndex("string")).rejects.toThrow("Index must be a number");
    });

    it("throws an error when index is out of range", async () => {
        await expect(fetchCatAtIndex(10)).rejects.toThrow("No cat was found that that index");
    })
});
