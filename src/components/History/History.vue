<template>
    <!-- History component consisting of multiple HistoryOrders -->
    <div class="history" v-if="orders[0] !== undefined">
        <history-order 
        v-for="(o, index) in orders"
        :key="index"
        :order="o">
        </history-order>
    </div>
</template>

<script>
import HistoryOrder from './HistoryOrder.vue'

export default {
    components: { HistoryOrder },
    props: {
        orders: Array,
    }
}
</script>

<style>
.history {
    border: 1.5px solid black;
    margin: 1%;
}
</style>