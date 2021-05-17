<template>
    <!-- Component used to create a new product -->
    <div class="new-rproduct-container">
        <input required placeholder="Name" name="name" type="text" v-model="name">
        <input required placeholder="Description" name="description" type="text" v-model="description">
        <input required placeholder="Price" name="price" type="number" v-model="price">
        <input required placeholder="Quantity" name="quantity" type="number" v-model="quantity">
        <button @click="addProductClicked">Add Product</button>    
    </div>
</template>

<script>
import Product from '../../../models/Product';

export default {
    props: {
        products: Array
    },
    data: () => ({
        name: "",
        description: "",
        price: null,
        quantity: null
    }),
    methods: {
        addProductClicked() {
            let { name, description, price, quantity } = this;
            let { valid, reason } = this.validateProps();
            if (!valid) return alert(reason);

            this.$emit('new-product', new Product(name, description, price, quantity));

            this.name = this.description = "";
            this.price = this.quantity = null;
        },
        validateProps() {
            let props = Object.keys(this.$data);
            let valid = false;

            for (const prop of props) {
                if (!this[prop])
                    return { valid, reason: `${prop} must be a positive value!` };
            }
            if (this.products.find(p => p.name == this.name))
                return { valid, reason: "There's already a product with that name!" };
            
            return { valid: true }
        }
    }
}
</script>

<style>

</style>