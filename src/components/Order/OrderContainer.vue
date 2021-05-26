<template>
  <div>
    <!-- Contains all EmployeeOrderProducts -->
    <div class="employee-order-product">
    <employee-order-product
      v-for="(p, index) in basket"
      :key="index"
      :product="p"
    >
    </employee-order-product>
    </div>
  </div>
</template>

<script>
import EmployeeOrderProduct from "./EmployeeOrderProduct.vue";
export default {
  components: { EmployeeOrderProduct },
  props: {
    basket: Array,
  },
};
</script>

<style>
</style>