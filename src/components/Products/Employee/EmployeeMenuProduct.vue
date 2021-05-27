<template>
    <!-- Big fat button -->
    <div class="employee-menu-product" v-on:click="EmployeeMenuProductItemClick()">
        <div class="top">
            <h3 class="product-name">{{product.name}}</h3>
            <p class="product-price">{{product.price}}</p>
        </div>
        <p class="product-description">{{product.description}}</p>
    </div>
</template>

<script>
import Product from '../../../models/Product';
export default {
    props: {
        product: [Product, Object]
    },
    methods: {
        EmployeeMenuProductItemClick(){
            this.$emit("employeemenuproductitemclick", this.product);
        }
    }
}
</script>

<style>
.employee-menu-product {
    position: relative;
    width: 200px;
    margin: 5px;
    padding: 5px;
    border-radius: 20px;
    border: 2px solid darkblue;
    background-color: lavender;
}
.employee-menu-product > * {
    margin: 1%;
    margin-block-start: 0%;
    margin-block-end: 0%;
}

.top {
    display: inline-block;
    width: 100%;
    color: darkblue;
    padding: 0;
    margin: 0;
}
.product-description {
    position: relative;
    bottom: 0;
    color: darkslategray;
}
</style>