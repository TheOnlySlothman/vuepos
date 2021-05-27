<template>
    <div>
        <!-- Product in the employee order -->
        <div class="employee-order-product">
            <p class="product-quantity">{{product.quantity}}x </p>
            <h3 class="product-name">{{product.name}}</h3>
            <p class="product-price">{{product.totalPrice()}} NGN</p>
        </div>
    </div>
</template>

<script>
import Product from '../../models/Product'
export default {
    props: {
        product: Product
    }
}
</script>

<style>
.employee-order-product{
    width:200px;
    border:1px solid;
}
</style>