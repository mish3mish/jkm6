function greet(str) {
    console.log(`${str}, ${this.username}, your room is ${this.room}!`);
  }
  
  const mango = {
    username: "Mango",
      room: 27
  };
  
  const poly = {
    username: "Poly",
      room: 191
  };

  console.log(greet.call(mango, "Welcome")); // "Welcome, Mango, your room is 27!"
  console.log(greet.call(poly, "Aloha")); // "Aloha, Poly, your room is 191!"