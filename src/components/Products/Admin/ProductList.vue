<template>
    <!-- Container for all AdminProducts -->
    <div id="product-list-container">
        <admin-product 
            v-for="(p, i) in products" :key="i"
            :product="p" @remove-product="onRemoveProduct" 
        />
    </div>
</template>

<script>
import AdminProduct from "./AdminProduct.vue"

export default {
  components: { AdminProduct }, 
    props: { products: Array },
    methods: {
        onRemoveProduct(product) { this.$emit('remove-product', product); }
    }
}
</script>

<style>

</style>