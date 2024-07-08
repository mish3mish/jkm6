const changeColor = function (color) {
    console.log("changeColor → this", this);
    this.color = color;
}

const hat = {
    color: "black",
};

changeColor.call(hat, "orange");
console.log(hat);

const sweater = {
    color: "green",
};

changeColor.call(sweater, "blue");
console.log(sweater);