export default class Order {
    /**
     * @param {number} id 
     * @param  {...Product[]} products 
     */
    constructor(id, ...products) {
        this.id = id;
        this.products = [...products];
        this.placedAt = new Date(Date.now());
    }
    PushProduct(product){
        this.products.push(product)
    }
    HasProduct(product){
        return this.products.some(x => x.name == product.name)
    }
    FindProduct(product){
        return this.products.find(x => x.name == product.name)
    }
    Sum() {
        return this.products.reduce((result, p) => {
            result += p.price;
        }, 0);
    }
}