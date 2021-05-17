<template>
    <!-- Product in Admin view -->
    <div class="admin-product-container">
        <label>
            Display
            <input type="checkbox" :value="product.displayed">
        </label>
        <input type="text" :value="product.name">
        <input type="text" :value="product.description">
        <input type="number" :value="product.price">
        <input type="number" :value="product.quantity">
        <button @click="removeButtonClicked">Remove</button>
    </div>
</template>

<script>
import Product from '../../../models/Product'

export default {
    props: {
        product: Product
    },
    methods: {
        removeButtonClicked() {
            this.$emit('remove-product', this.product);
        }
    }
}
</script>

<style>

</style>