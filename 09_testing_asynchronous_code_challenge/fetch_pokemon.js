const fetchPokemon = async (nameOrId) =>
{
    try {
        if (typeof(nameOrId) !== "string")
        {
            throw new Error("Please provide a Pokemon name or id as string.");
        }

        if (nameOrId === "0")
            {
                throw new Error("0 isn't a name or id. Please provide a Pokemon name.");
            }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
        
        if (!response.ok)
        {
            throw new Error(`Pokemon not found: ${nameOrId}`)
        }
        
        const data = await response.json();

        const pokemonData = {'name': data.name, 'sprites': {'front_default': data.sprites.front_default}};
        console.log(pokemonData);
        return pokemonData
    } catch(error) {
        throw error;
    }
}
fetchPokemon("ditto");
module.exports = fetchPokemon;