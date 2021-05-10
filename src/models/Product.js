export default class Product {
    /**
     * @param {string} name 
     * @param {string} description 
     * @param {number} price 
     * @param {number} quantity 
     */
    constructor(name, description, price, quantity = 0) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity
        this.displayed = false;
    }
}