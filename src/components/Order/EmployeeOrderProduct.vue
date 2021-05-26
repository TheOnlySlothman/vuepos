<template>
    <div>
        <!-- Product in the employee order -->
        <div class="employee-order-product">
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>
            <p>{{product.quantity}}</p>
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