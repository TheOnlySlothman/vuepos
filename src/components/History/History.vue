<template>
    <!-- History component consisting of multiple HistoryOrders -->
    <div class="history">
        <history-order :products="order.products">
        </history-order>
    </div>
</template>

<script>
import Order from '../../models/Order'
import HistoryOrder from './HistoryOrder.vue'

export default {
    components: { HistoryOrder },
    props: {
        order: Order,
    }
}
</script>

<style>
.history{
    width:200px;
    border:1px solid;
}
</style>