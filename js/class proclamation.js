class Car {

    static description = "Lalala";
    static carsAmount = 0;
    static addOneCar(){
        this.carsAmount += 1;
    }

    static getCarsAmount() {
        console.log(`The amount of cars is ${this.carsAmount}`);
    }

    #owner;

    constructor(brand, model, price, owner) {
        Car.addOneCar();

        // public values
        this.brand = brand;
        this.model = model;
        this.price = price;
        // private value
        this.#owner = owner;

    }

    displayCarInfo() {
        //public method
        console.log(`Brand: ${this.brand}\nModel:${this.model}\nPrice: ${this.price}`);

    }

    #checkOwner() {
    // private method
    const userAnswer = prompt("Enter current username:");
    return userAnswer === this.#owner;
}
    

    get owner() {
        if(this.#checkOwner()) {
            return this.#owner;
        } else {
            console.log("Operation is not possible");
        }
        
    }

    set owner(newOwner) {
        if (this.#checkOwner()) {
            this.#owner = newOwner;
            console.log(`Owner was successfully changed. New owner is ${newOwner}`);
        } else {
            console.log('Current owner is not correct. Please, try again!')
        }
        
    }
}

console.dir(Car);
console.log(Car.description);



const mazda = new Car("Mazda", "RX6", 15000, "Jack");
// intance mazda
mazda.displayCarInfo();
console.log(mazda);
console.log(mazda.brand);
// mazda.owner = "Bob";
// console.log(mazda.owner);
// console.log(mazda.#owner);

const subaru = new Car("Subaru", "Forester", 12000, "Sam");
// instance subaru
// subaru.displayCarInfo();


Car.getCarsAmount()