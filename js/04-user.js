class User {
    #login;
    #email;

    constructor({login, email}) {
        this.#login = login;
        this.#email = email;
    }

get email() {
    return this.#email;
}

get login() {
    return this.#login;
}

set email(newEmail) {
    this.#email = newEmail;
}

set login(newLogin) {
    this.#login = newLogin;
}

}


const mango = new User ({
    login: "Mango",
    email: 'magngo@dog.woof',
});

console.log(mango.login);
mango.login ='Mangodoge';
console.log(mango.login);
