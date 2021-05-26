<template>
    <!-- The application in employee view -->
  <div>
    <product-display @employeeadditemtobasket="EmployeeAddItemToBasket" :products="products"/>
    <h3>big text</h3>
    <order-container :order="basket" v-on:ordersubmit="FinishOrder"/>
  </div>
</template>

<script>
import Order from '../../models/Order';
import OrderContainer from '../Order/OrderContainer.vue';
import ProductDisplay from '../Products/Employee/ProductDisplay.vue';
export default {
  components: { ProductDisplay, OrderContainer },
  props: {
    products: Array,
  },
  data: () => ({
      basket: new Order()
    }),
  methods: {
    /**@param {Product} product */
    EmployeeAddItemToBasket(product) {
      if (this.basket.FindProduct(product)) {
        //this.$emit('quantity-change', product, 1)
        this.basket.PushProduct(product)
      }
      else {
        this.basket.PushProduct(product)
      }
    },
    FinishOrder(){
      this.$emit('addordertohistory', this.basket)
      this.basket = new Order()
    }
  },
};
</script>

<style>
</style>