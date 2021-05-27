<template>
    <!-- The application in admin view -->
    <div id="admin-content">
        <div class="admin-content-split" id="admin-content-splitter-1">
            <button id="btnDefaultProductsRequest" @click="onDefaultProductsRequested">Add Default Products</button>
            <br /><br />
            <h2>Add a new product</h2>
            <new-product :products="products" @new-product="onNewProductAdded" />
            <br /><br />
            <h2>Products</h2>
            <product-list :products="products" @update-product="onUpdateProduct" @remove-product="onRemoveProduct" />
            <br />
        </div>
        <div class="admin-content-split" id="admin-content-splitter-2">
            <h2 style="text-align:center;">History</h2>
            <history :orders="orders" />
        </div>
    </div>
</template>

<script>
import History from '../History/History';
import NewProduct from '../Products/Admin/NewProduct';
import ProductList from '../Products/Admin/ProductList';
import Product from '../../models/Product';

export default {
    components: { ProductList, NewProduct, History },
    data: () => ({
        defaultProducts: [
            new Product('Kringle', "Den er kringleformet med kærlighed", 20, 5),
            new Product('Lagkage', "Der er op til hele 5 lag", 50, 2),
            new Product('Kajkage', "Den grønneste frø du kan finde", 10, 10),
            new Product('Hindbærsnitte', "Der er meget syltetøj i", 25, 5)
        ]
    }),
    props: { products: Array, orders: Array },
    methods: {
        onNewProductAdded(product) { this.$emit('new-product', product); },
        onUpdateProduct(origin, updated) { this.$emit('update-product', origin, updated); },
        onRemoveProduct(product) { 
            this.$emit('remove-product', product); 
            if (!this.hasDefaultProducts()) {
                let button = document.getElementById('btnDefaultProductsRequest');
                button.disabled = false;
            }

        },
        onDefaultProductsRequested() {
            let button = document.getElementById('btnDefaultProductsRequest');
            button.disabled = true;

            if (this.hasDefaultProducts(this.defaultProducts)) return;

            this.defaultProducts.forEach(p => p.displayed = true);
            this.$emit('default-products-request', [...this.defaultProducts]);
        },
        hasDefaultProducts() {
            let defaultNames = this.defaultProducts.map(p => p.name);
            let productNames = this.products.map(p => p.name);

            //If this.products doesn't have a name from this.defaultProducts, name is returned and therefore will return false
            return defaultNames.find(name => !productNames.includes(name)) == null;

            // for (const name of defaultNames) {
            //     if (!productNames.includes(name)) 
            //         return false;
            // }
            // return true;
        }
    }
}
</script>

<style>
.new-product {
    display: inline;
}
#btnDefaultProductsRequest {
    border: 2px dashed darkgray;
}
.admin-content-split {
    display: inline-block;
    position: relative;
}
#admin-content-splitter-1 {
    float: left;
}
#admin-content-splitter-2 {
    float: right;
    min-width: 20%;
    max-width: 35%;
}
</style>