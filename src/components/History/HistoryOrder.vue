<template>
    <!-- Order item in history component -->
    <div class="history-order">
        <history-order-product
        v-for="(p, index) in products" 
        :key="index"
        :product="p">
        </history-order-product>
    </div>
</template>

<script>
import HistoryOrderProduct from './HistoryOrderProduct.vue';

export default {
    components: { HistoryOrderProduct },
    props: {
        products: Array
    }
}
</script>

<style>
.history-order{
    width:200px;
    border:1px dashed;
}
</style>