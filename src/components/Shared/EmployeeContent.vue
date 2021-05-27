<template>
    <!-- The application in employee view -->
  <div id="employee-content">
    <div class="employee-content-split" id="employee-content-splitter-1">
      <h2>Products</h2>
      <product-display @employeeadditemtobasket="EmployeeAddItemToBasket" :products="products.filter(x => x.displayed)"/>
    </div>
    <div class="employee-content-split" id="employee-content-splitter-2">
      <h2 style="text-align:center;">Your Basket</h2>
      <order-container :basket="basket" :sum="sum" @ordersubmit="FinishOrder" @deleteorderproduct="EmployeeRemoveItemToBasket"/>
    </div>
  </div>
</template>

<script>
import Order from '../../models/Order';
import Basket from '../../models/Basket';
import OrderContainer from '../Order/OrderContainer.vue';
import ProductDisplay from '../Products/Employee/ProductDisplay.vue';

export default {
  components: { ProductDisplay, OrderContainer },
  props: {
    products: Array,
    orders: Array
  },
  data: () => ({
      basket: new Basket(),
      sum: 0
    }),
  methods: {
    /**@param {Product} product */
    EmployeeAddItemToBasket(product) {
      this.basket.add(product);
      this.sum = this.basket.sum();
    },
    FinishOrder() {
      if(this.basket.products.length <= 0)
        return
      this.$emit('addordertohistory', new Order(this.orders.length + 1, ...this.basket.products))
      this.basket = new Basket();
    },
    EmployeeRemoveItemToBasket(product){
      this.basket.remove(product)
      this.sum = this.basket.sum()
    }
  },
}
</script>

<style>
.employee-content-split {
  display: inline-block;
  min-width: 20%;
  max-width: 50%;
  min-height: 90vh;
}
#employee-content-splitter-1 {
  float: left;
}
#employee-content-splitter-2 {
  float: right;
}
</style>