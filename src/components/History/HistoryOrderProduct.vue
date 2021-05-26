<template>
    <div class="history-order-product">
        <!-- Product from cart displayed in History -->
        <p>{{product.quantity}} - {{product.name}} - {{product.price}} 	XOF.</p>
        <p>{{product.description}}</p>
    </div>
</template>

<script>
import Product from '../../models/Product';

export default {
    props: {
        product: Product
    }
}
</script>

<style>
.history-order-product {
    border:1px dashed;
    padding: 2%;
}
</style>