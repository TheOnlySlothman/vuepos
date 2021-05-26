export default class Order {
    /**
     * @param {number} id 
     * @param  {...Product[]} products 
     */
    constructor(id, ...products) {
        this.id = id;
        this.products = [].concat(...products);
        this.placedAt = new Date(Date.now());
    }
    PushProduct(product){
        this.products.push(product)
    }
    FindProduct(product){
        return this.products.some(x => x.name == product.name)
    }
}