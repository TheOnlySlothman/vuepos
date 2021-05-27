<template>
    <div class="history-order-product">
        <!-- Product from cart displayed in History -->
        <p>{{product.quantity}}x {{product.name}}: {{product.price}} NGN.</p>
        <p>{{product.description}}</p>
    </div>
</template>

<script>
import Product from '../../models/Product';

export default {
    props: {
        product: [Product, Object]
    }
}
</script>

<style>
.history-order-product {
    border-bottom: 1px dashed;
}
</style>