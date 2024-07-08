class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemToDelete) {
        //* filter
        // this.items = this.items.filter(item => item !== itemToDelete);
        //* indexOf + splice
        const indexToDelete = this.items.indexOf(itemToDelete);
        console.log(indexToDelete);
        if (indexToDelete !== -1) {
            this.items.splice(indexToDelete, 1);
        } else {
            console.log('This item does not exist');
        }

    }

}


const storage = new Storage(["apple", "lemon", "grapes", "orange"]);

const items = storage.getItems();
console.table(items);

storage.addItem("banana");
console.table(storage.items);

storage.removeItem("lemon");
storage.removeItem("banana");
console.table(storage.items);