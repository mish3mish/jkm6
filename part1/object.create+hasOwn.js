const animal = {
    legs:4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);

console.log(Object.hasOwn(dog, "name"));
console.log(Object.hasOwn(dog, "legs"));

for (const key in dog) {
    if (Object.hasOwn(dog, key)) {
        console.log(key);
    }
}

