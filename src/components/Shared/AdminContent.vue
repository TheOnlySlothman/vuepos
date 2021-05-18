<template>
    <!-- The application in admin view -->
    <div id="admin-content">
        <new-product :products="products" @new-product="onNewProductAdded" />
        <product-list :products="products" @remove-product="onRemoveProduct" />
        <history :products="products" />
    </div>
</template>

<script>
import History from '../History/History';
import NewProduct from '../Products/Admin/NewProduct';
import ProductList from '../Products/Admin/ProductList';

export default {
  components: { ProductList, NewProduct, History },
    props: { products: Array },
    methods: {
        onNewProductAdded(product) {
            this.$emit('new-product', product);
        },
        onRemoveProduct(product) {
            this.$emit('remove-product', product);
        }
    }
}
</script>

<style>

</style>