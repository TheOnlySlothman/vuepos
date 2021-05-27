<template>
  <div>
    <!-- Contains all EmployeeOrderProducts -->
    <div id="order-container">
      <div id="products">
        <employee-order-product
          v-for="(p, index) in basket.products"
          :key="index"
          :product="p"
        />
      </div>
      <div class="goBottom" id="total">
        <h3>Total:</h3>
        <p id="sum">{{ sum }} NGN</p>
      </div>
      <button class="goBottom" @click="OrderSubmit">Buy</button>
    </div>
  </div>
</template>

<script>
import Basket from '../../models/Basket';
import EmployeeOrderProduct from "./EmployeeOrderProduct.vue";

export default {
  components: { EmployeeOrderProduct },
  props: {
    basket: new Basket(),
    sum: Number
  },
  methods: {
    OrderSubmit() {
      this.$emit('ordersubmit') 
    }
  }
}
</script>

<style>
#order-container {
  position: relative;
  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 85vh;
}
.goBottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#total {
  bottom: 10%;
  border-top: 2px solid black;
  margin: 2%;
  padding-top: 2%;
  background-color: #00ff21;
}
#total > * {
  display: inline-block;
  position: relative;
  margin-block-start: 0;
  margin-block-end: 0;
}
#total > p {
  position: absolute;
  right: 2%;
}
#order-container > button {
  height: 10%;
  font-size: 25px;
  font-weight: bold;
}
#products {
  display: table-cell;
  width: 100%;
  height: 100%;
}
</style>