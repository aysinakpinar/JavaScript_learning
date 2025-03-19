const multiply = require('./02_multiply');

describe('multiply', () => {
    it('multiplies 3 and 5 returns 15', () => 
        {
        expect(multiply(3,5)).toEqual(15);
    });
});