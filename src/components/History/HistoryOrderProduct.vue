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
template {
    width:200px;
    border:1px solid;
}
</style>