const Car = function(manufacturer, price, engine){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;

    this.getManufacturer = () => manufacturer;
    this.getPrice = () => price;
    this.getEngine = () => engine;
}

module.exports = Car; 