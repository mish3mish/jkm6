const showThis = function (a, b, arr) {
    console.log(a, b, arr);
}

const objB = {
    x: 788,
    y: 25,
}

showThis.call(objB, 1, 1, 2);
showThis.apply(objB, [1, 1, 2]);

