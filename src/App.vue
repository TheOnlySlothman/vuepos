<template>
  <div id="app">
    <div id="content">
      <employee-content v-on:add-to-basket="AddItemToBasket" :products="[...products]"/>
    </div>
  </div>
</template>

<script>
import Product from './models/Product'
import Order from './models/Order'
import EmployeeContent from './components/Shared/EmployeeContent'

export default {
  components: {  EmployeeContent },
  name: 'App',
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
    ],
    products : [
      new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
      new Product('Orange', 'Round juicy orange fruit', 1, 2),
      new Product('Beef', 'Round juicy red meat', 5, 3),
      new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 5)
    ]
  }),
  methods: {
  }
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
