class Car {
    constructor(params) {
        this.brand = params.brand;
        this.model = params.model;
        this.price = params.price;
    }
}

const bmw = new Car ({ brand: "BMW", model: "X5", price: 58900 });
console.log(bmw);

