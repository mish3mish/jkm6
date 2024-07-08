const counter = {
    value: 0,
    increment(value) {
        console.log("increment → this", this);
        this.value += value;
    },
    decrement(value) {
        console.log("decrement → this", this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
}

updateCounter(5, counter.increment.bind(counter));
updateCounter(3, counter.decrement.bind(counter));
console.log(counter);

