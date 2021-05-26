<template>
  <div>
    <!-- Contains all EmployeeOrderProducts -->
    <div class="order-container">
    <employee-order-product
      v-for="(p, index) in order.products"
      :key="index"
      :product="p"
    >
    </employee-order-product>
    </div>
  </div>
</template>

<script>
import Order from '../../models/Order';
import EmployeeOrderProduct from "./EmployeeOrderProduct.vue";
export default {
  components: { EmployeeOrderProduct },
  props: {
    order: Order,
  },
};
</script>

<style>
</style>