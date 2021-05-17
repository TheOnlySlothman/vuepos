<template>
    <!-- Product in Admin view -->
    <div class="admin-product-container">
        <input type="text" :value="product.name">
        <input type="text" :value="product.description">
        <input type="number" :value="product.price">
        <input type="number" :value="product.quantity">
        <input type="checkbox" :value="product.displayed">
    </div>
</template>

<script>
import Product from '../../../models/Product'

export default {
    props: {
        product: Product
    }
}
</script>

<style>

</style>