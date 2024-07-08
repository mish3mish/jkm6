class Car {
    #brand
    constructor(params) {
      this.#brand = params.brand;
      this.model = params.model;
      this.price = params.price;
    }
  
    getPrice() {
      return this.price;
    }
  
    changePrice(newPrice) {
      this.price = newPrice;
    }
  
  
    getBrand() {
      return this.#brand;
    }
  
    changeBrand(newBrand) {
      this.#brand = newBrand;
  
    }
  }
  