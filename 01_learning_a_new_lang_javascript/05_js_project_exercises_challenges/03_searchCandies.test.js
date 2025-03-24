const searchCandies  = require("./03_searchCandies")

describe('searchCandies - Name filtering', () =>
{
    it('searches candies starting with s and the price is less than 2', () =>
    {
        expect(searchCandies('S', 2)).toEqual(['Skittles']);
    });

    it('searches case insensitive and price is less than 10', () =>
    {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});

describe('searchCandies - Price filtering', () =>
{
    it('searches candies starting with ma and the price is less than 2', () =>
    {
        expect(searchCandies('ma', 2)).toEqual(['Mars']);
    });
});

describe('searchCandies - Invalid inputs return empty array', () =>
{
    it('searches candies starts with 123 and price less than 2', () =>
    {
        expect(searchCandies('123', 2)).toEqual([]);
    });

    it('searches candies with special characters @ and price is less than 10', () =>
    {
        expect(searchCandies('@ab', 10)).toEqual([]);
    });

    it('searches candies with a negative price -2', () =>
    {
        expect(searchCandies('ma', -2)).toEqual([]);
    });
});