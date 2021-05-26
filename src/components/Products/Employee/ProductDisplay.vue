<template>
    <div>
        <!-- Container for all EmployeeMenuProducts -->
        <employee-menu-product
        v-for="(p, index) in products" 
        :key="index"
        :product="p"
        v-on:employeemenuproductitemclick="EmployeeButtonsAddProduct">
        </employee-menu-product>
    </div>
</template>

<script>
import EmployeeMenuProduct from './EmployeeMenuProduct.vue';
export default {
    components: { EmployeeMenuProduct },
    props: {
        products: Array
    },
    methods: {
        /**@param {Product} product */
        EmployeeButtonsAddProduct(product)
        {
            this.$emit("employeeadditemtobasket", product)
        }
    }
}
</script>

<style>

</style>