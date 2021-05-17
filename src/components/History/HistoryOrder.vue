<template>
    <div>
        <!-- Order item in history component -->
        <history-order-product
        v-for="(p, index) in hOrderProduct"
        :key="index"
        :product="p">
        </history-order-product>
    </div>
</template>

<script>
import HistoryOrderProduct from './HistoryOrderProduct.vue'
export default {
    components: { HistoryOrderProduct },
    prop: {
        hOrderProduct: Array
    }
}
</script>

<style>
template{
    width:200px;
    border:1px solid;
}
</style>