import Product from "./Product";

export default class Order {
    /**
     * @param {number} id 
     * @param  {...Product} products 
     */
    constructor(id, ...products) {
        this.id = id;
        this.products = [].concat(...products);
        this.placedAt = new Date(Date.now());
    }
}