<template>
    <div>
        <!-- Big fat button -->
        <div class="employee-menu-product"
        v-on:click=EmployeeMenuProductItemClick()>
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>
        </div>
    </div>
</template>

<script>
import Product from '../../../models/Product';
export default {
    props: {
        product: Product
    },
    methods: {
        EmployeeMenuProductItemClick(){
            this.$emit("employeemenuproductitemclick", this.product);
        }
    }
}
</script>

<style>
.employee-menu-product{
    width:200px;
    border:1px solid;
}
</style>