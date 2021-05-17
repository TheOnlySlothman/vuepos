<template>
  <div id="app">
    <admin-content :products="products" 
      @new-product="onNewProductAdded" 
      @remove-product="onRemoveProduct"
    />
  </div>
</template>

<script>
import AdminContent from './components/Shared/AdminContent.vue';
import Product from './models/Product';

export default {
  name: 'App',
  components: {
    AdminContent
  },
  data: () => ({
    products: [
      new Product("Hello", "There", 69, 10),
    ]
  }),
  methods: {
    onNewProductAdded(product) {
      this.products.push(product);
    },
    onRemoveProduct(product) {
      this.products.splice(this.products.indexOf(product), 1);
    },

    saveData() {
      localStorage.setItem('data', JSON.stringify(this.$data));
    },
    loadData() {
      this.$data = JSON.parse(localStorage.getItem('data'));
    }
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
