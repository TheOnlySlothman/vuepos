<template>
  <div id="app">
    <navigation-bar :adminMode="adminMode" @admin-toggle="onAdminModeToggle" />
    <div id="content" v-if="adminMode">
      <admin-content :products="products"
        :orders="orders"
        @new-product="onNewProductAdded" 
        @remove-product="onRemoveProduct"
        @update-product="onUpdateProduct"
        @default-products-request="onDefaultProductsRequested"
      />
    </div>
    <div id="content" v-else>
      <employee-content :products="[...products]" v-on:addordertohistory="AddOrderToHistory"/>
    </div>
  </div>
</template>

<script>
import Product from './models/Product'
import Order from './models/Order'
import EmployeeContent from './components/Shared/EmployeeContent'
import NavigationBar from './components/Shared/NavigationBar.vue';
import AdminContent from './components/Shared/AdminContent.vue';
import vueposLog from './models/vueposLogger';

export default {
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
    ],
    adminMode: false,
    localStorageName: 'products'
  }),
  components: { NavigationBar, AdminContent, EmployeeContent },
  created() { this.loadData(); },
  methods: {
    /**@param {Product} product */
    onNewProductAdded(product) {
      this.products.push(product);
      vueposLog(`Added ${product.quantity} ${product.name}${(product.name.endsWith('s') ? 'es' : 's')} for the price: ${product.price}`);
      this.saveData();
    },
    /**@param {Product} origin
     * @param {Product} updated*/
    onUpdateProduct(origin, updated) {
      let originIndex = this.products.indexOf(origin);
      this.products[originIndex] = updated;

      let changes = Object.keys(updated).reduce((result, current) => {
        if (updated[current] != origin[current])
          result[current] = {
            origin: origin[current],
            updated: updated[current]
          }
        return result;
      }, {});

      vueposLog(`Product updated`);
      console.table(changes);

      this.saveData();
    },
    /**@param {Product} product */
    onRemoveProduct(product) {
      let productIndex = this.products.indexOf(product);
      if (productIndex < 0 || productIndex >= this.products.length) return alert(`Product isn't in products list!`);

      this.products.splice(productIndex, 1);
      vueposLog(`Removed product "${product.name}" from products.`);

      this.saveData();
    },
    /**@param {Product[]} products */
    onDefaultProductsRequested(products) {
      let productsLength = this.products.length;

      for (let i = 0; i < productsLength; i++) {
        this.products.pop();
      }
      
      console.log(this.products);
      this.products.push(...products);

      vueposLog(`Added ${products.length} default products.`);

      this.saveData();
    },
    /**@param {Boolean} checked */
    onAdminModeToggle(checked) {
      this.adminMode = checked;
      vueposLog(`Switched content to: %c${(this.adminMode ? "Admin" : "Employee")} Mode`, 
        "color:#77ccff; font-weight: bold; text-decoration: underline;"
      );
      // alert(`You are now in ${(this.adminMode ? "Admin" : "Employee")} Mode`);
    },
    AddOrderToHistory(order){
      this.orders.push(order)
    },

    saveData() {
      localStorage.setItem(this.localStorageName, JSON.stringify(this.$data.products));
      vueposLog(`Saved products to localStorage as "${this.localStorageName}"`)
    },
    loadData() {
      this.$data.products = JSON.parse(localStorage.getItem(this.localStorageName));
      if (this.$data.products) vueposLog(`Loaded products from localStorage from name: "${this.localStorageName}"`)
      else {
        this.$data.products = [];
        vueposLog(`No products were found using localStorageName "${this.localStorageName}"`);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#content {
  margin: 2%;
}
</style>
