const Car = require('./car');

let miniCooper;

beforeEach( () => {
     miniCooper = new Car ("BMW", 22000, "3-cylinder")
})

describe ('testing getters', () => {

    test('can get manufacturer', () => {
        actual = miniCooper.getManufacturer();
        expected = "BMW";
        expect(actual).toBe(expected);
    })

    test('can get price)', () => {
        actual = miniCooper.getPrice();
        expected = 22000;
        expect(actual).toBe(expected);
    })

    test('can get engine', () => {
        actual = miniCooper.getEngine();
        expected = "3-cylinder";
        expect(actual).toBe(expected);
    })
})