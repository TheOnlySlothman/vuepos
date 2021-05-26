<template>
    <!-- The application in employee view -->
  <div id="employee-content">
    <div class="employee-content-split" id="employee-content-splitter-1">
      <product-display @employeeadditemtobasket="EmployeeAddItemToBasket" :products="products.filter(x => x.displayed)"/>
    </div>
    <div class="employee-content-split" id="employee-content-splitter-2">
      <order-container :basket="basket" :sum="sum" @:ordersubmit="FinishOrder"/>
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
    products: Array
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
      this.$emit('addordertohistory', new Order(this.products.length, ...this.basket))
      this.basket = new Basket();
    }
  },
};
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