<template>
    <!-- History component consisting of multiple HistoryOrders -->
    <div class="history">
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
.history{
    width:200px;
    border:1px solid;
}
</style>