// class User {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`

//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;

//     }
// }


class User {
    constructor({name, age, numberOfPosts, topics}) {
        this.name = name;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
        this.topics = topics;
    }

    getInfo() {
        return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
    }
    
    updatePostCount(value) {
        this.numberOfPosts += value;
    }
}







const mango = new User ({
    name: "mango@mail.com",
    age: 24,
    numberOfPosts: 20,
    topics: ["tech", "cooking"],
});

console.log(mango.getInfo());
mango.updatePostCount(5);
console.log(mango.getInfo());
