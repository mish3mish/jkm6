const changeColor = function (color) {
    console.log("changeColor → this", this);
    this.color = color;
}

const hat = {
    color: "black",
    name: "adidas",
};



const sweater = {
    color: "green",
};

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater);