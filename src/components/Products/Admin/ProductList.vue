<template>
    <!-- Container for all AdminProducts -->
    <div class="product-list-container">
        <div v-for="(p, i) in products" :key="i">
            <admin-product :product="p" @remove-product="onRemoveProduct" />
        </div>
    </div>
</template>

<script>
import AdminProduct from "./AdminProduct.vue"

export default {
  components: { AdminProduct }, 
    props: {
        products: Array
    },
    methods: {
        onRemoveProduct(product) {
            this.$emit('remove-product', product);
        }
    }
}
</script>

<style>

</style>