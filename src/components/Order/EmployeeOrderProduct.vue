<template>
    <div>
        <!-- Product in the employee order -->
        <div class="employee-order-product">
            <p class="product-quantity">{{product.quantity}}x </p>
            <h3 class="product-name">{{product.name}}</h3>
            <p class="product-price">{{product.price}} NGN</p>
            <p class="product-price">{{product.price}}*{{product.quantity}} NGN</p>
        </div>
    </div>
</template>

<script>
import Product from '../../models/Product'

export default {
    props: {
        product: [Product, Object]
    }
}
</script>

<style>
.employee-order-product {
    display: inline-block;
    border: 1px solid;
    min-height: 10%;
    width: 100%;
}
.employee-order-product > * {
    display: inline;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin: 1%;
}
.product-name {
    margin-bottom: 1%;
    float: left;
}
.product-quantity {
    float: left;
    margin-left: 2%;
}
.product-price {
    float: right;
    margin-block-end: 0px;
    margin-right: 2%;
}
</style>