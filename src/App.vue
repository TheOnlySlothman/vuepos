<template>
  <div id="app">
    <div v-for="(o, index) in orders" :key="index">
      <history :order="o">
      </history>
    </div>
  </div>
</template>

<script>
import History from './components/History/History'
import Product from './models/Product'
import Order from './models/Order'

export default {
  name: 'App',
  components: { History },
  data: () => ({
    orders: [
      new Order(1, 
        new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
        new Product('Orange', 'Round juicy orange fruit', 1, 2)
      ),
      new Order(2, 
        new Product('Beef', 'Round Juicy red meat', 5, 5),
        new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 4)
      )
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
