<template>
    <!-- The application in employee view -->
  <div>
    <product-display @employeeadditemtobasket="EmployeeAddItemToBasket" :products="products"/>
    <h3>big text</h3>
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
      if (this.basket.includes(product)) {
        //this.$emit('quantity-change', product, 1)
        this.basket.push(product)
      }
      else {
        this.basket.push(product)
      }
    },
  },
};
</script>

<style>
</style>