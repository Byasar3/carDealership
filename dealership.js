
// Add methods to Dealership to:
// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock

const Dealership = function(name, maxNumberCars, carsInStock){
    this.name = name;
    this.maxNumberCars = maxNumberCars;
    this.carsInStock = [];
}

// count number of cars in stock prototype: s
Dealership.prototype.countStock = function(){
    return this.carsInStock.length;
}

// Add a car to stock
Dealership.prototype.addToStock = function(manufacturer, price, engine){
    this.carsInStock.push;
}


module.exports = Dealership; 

