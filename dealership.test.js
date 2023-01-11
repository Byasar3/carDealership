const Dealership = require ('./dealership');
const Car = require('./car');

let dealership1;
let miniCooper;

beforeEach(() => {
    dealership1 = new Dealership("London branch", 100, [miniCooper])
    miniCooper = new Car ("BMW", 22000, "3-cylinder")
})

describe ('testing dealership', () => {

    test('can get dealership stock count', () => {
        actual = dealership1.carsInStock.length;
        expected = 1;
        expect(actual).toBe(expected);
    }, 0)
})