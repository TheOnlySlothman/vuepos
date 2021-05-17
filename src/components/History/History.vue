<template>
    <div>
        <!-- History component consisting of multiple HistoryOrders -->
         <history-order
        v-for="(x, index) in hOrder"
        :key="index"
        :hOrderProduct="x">
        </history-order>
    </div>
</template>

<script>
import HistoryOrder from './HistoryOrder.vue'
export default {
    components: { HistoryOrder },
    props: {
        hOrder: Array
    }
}
</script>

<style>
template{
    width:200px;
    border:1px solid;
}
</style>