<template>
    <!-- The application in employee view -->
  <div>
      <product-display @employeeadditemtobasket="EmployeeAddItemToBasket" :products="products"/>
      <order-container :basket="basket"/>
  </div>
</template>

<script>
import OrderContainer from '../Order/OrderContainer.vue';
import ProductDisplay from '../Products/Employee/ProductDisplay.vue';
export default {
  components: { ProductDisplay, OrderContainer },
  props: {
    products: Array,
  },
  data: () => ({
      basket: []
    }),
  methods: {
    /**@param {Product} product */
    EmployeeAddItemToBasket(product) {
      this.$emit('add-to-basket', product)
    },
  },
};
</script>

<style>
</style>