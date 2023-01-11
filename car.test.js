const Car = require('./car');

describe ('testing getters', () => {

    test('can get manufacturer', () => {
        const miniCooper = new Car ("BMW", 22000, "3-cylinder")
        actual = miniCooper.getManufacturer();
        expected = "BMW";
        expect(actual).toBe(expected);
    })
})