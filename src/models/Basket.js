import Product from './Product';

export default class Basket {
    constructor() {
        this.products = []
    }
    
    add(product) {
        if (this.has(product)) {
            let productIndex = this.products.indexOf(this.find(product));
            this.products[productIndex].quantity += 1;
        }
        else {
            const { name, description, price } = product;
            this.products.push(new Product(name, description, price, 1))
        }
    }
    remove(product) {
        if (this.find(product).quantity > 1) {
            let productIndex = this.products.indexOf(this.find(product));
            this.products[productIndex].quantity -= 1;
        }
        else {
            this.products.splice(this.products.indexOf(this.find(product)), 1)
        }
    }
    has(product) {
        return this.products.some(x => x.name == product.name)
    }
    find(product) {
        return this.products.find(x => x.name == product.name)
    }
    sum() {
        return this.products.reduce((result, p) => result += p.price * p.quantity, 0);
    }
}