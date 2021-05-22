<template>
  <div id="app">
    <!--<product-display :products="products"/>-->
    <div>
      <history :orders="Orders">
      </history>
    </div>
  </div>
</template>

<script>
import Product from './models/Product'
import Order from './models/Order'
//import ProductDisplay from './components/Products/Employee/ProductDisplay.vue'
import History from './components/History/History.vue'

export default {
  components: {  History },
  name: 'App',
  data: () => ({
    Orders: [
      new Order(1, 
        new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
        new Product('Orange', 'Round juicy orange fruit', 1, 2)
      ),
      new Order(2, 
        new Product('Beef', 'Round Juicy red meat', 5, 5),
        new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 4)
      )
    ],
    products : [
      new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
      new Product('Orange', 'Round juicy orange fruit', 1, 2),
      new Product('Beef', 'Round Juicy red meat', 5, 5),
      new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 4)
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
