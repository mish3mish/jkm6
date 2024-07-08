class Rectangle {
    constructor(width, heigth) {
        this.name = "Rectangle"
        this.width = width;
        this.heigth = heigth;
    }

    getInfo(){
        console.log(`Name: ${this.name}\nWidth: ${this.width}\nHeight: ${this.heigth}`);
    }

    calcualtePerimetr() {
        return this.width * 2 + this.heigth * 2;

    }

    calculateArea() {
        return this.heigth * this.width;

    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.name = "Square";

    }

}

console.dir(Square);



const rec = new Rectangle (5,10);
rec.getInfo();

console.log(rec.calculateArea());
console.log(rec.calcualtePerimetr());

const square = new Square(5);
console.log(square);


square.getInfo();