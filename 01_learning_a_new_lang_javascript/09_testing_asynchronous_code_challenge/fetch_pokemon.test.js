const fetchPokemon = require("./fetch_pokemon")

describe("fetchPokemon(name)", () =>
{
    it("returns name and sprites for name Ditto ", async () =>
    {
        const dittoData = await fetchPokemon('ditto');
        expect(dittoData).toEqual({"name": "ditto", "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}})
    });

    it("returns name and sprites for pokemon id 25 (pikachu) ", async () =>
    {
        const pikachuData = await fetchPokemon('25');
        expect(pikachuData).toEqual({"name": "pikachu", "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}})
    });
    
    it("throw an error when a number is used as a name", async () => 
    {
        await expect(fetchPokemon(1)).rejects.toThrow("Please provide a Pokemon name or id as string.");
    });

    it("throw an error when 0 is used as a name", async () => 
    {
        await expect(fetchPokemon("0")).rejects.toThrow("0 isn't a name or id. Please provide a Pokemon name.");
    });

    it("throw an error when nameOrId isn't a pokemon name", async () => 
    {
        await expect(fetchPokemon("aaaaaa")).rejects.toThrow("Pokemon not found: aaaaaa");
    });  
    
})