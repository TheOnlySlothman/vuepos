<template>
    <!-- Order item in history component -->
    <div class="history-order">
        <h3>ID: {{ order.id }}</h3>
        <p>{{ order.placedAt.toLocaleDateString() }}, {{ order.placedAt.toLocaleTimeString() }}</p>
        <history-order-product
        v-for="(p, index) in order.products" 
        :key="index"
        :product="p">
        </history-order-product>
        <h5>{{ order.Sum() }}</h5>
    </div>
</template>

<script>
import Order from '../../models/Order';
import HistoryOrderProduct from './HistoryOrderProduct.vue';

export default {
    components: { HistoryOrderProduct },
    props: {
        order: [Order, Object]
    }
}
</script>

<style>
.history-order{
    border: 1px solid;
    padding-left: 2%;
    padding-top: 1%;
    padding-right: 1%;
}
.history-order > h3, .history-order > p {
    display: inline;
}
.history-order > p {
    float: right;
    margin-block-end: 0px;
}
</style>