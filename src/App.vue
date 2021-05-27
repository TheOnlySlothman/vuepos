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
      <employee-content :products="[...products]" :orders="orders" v-on:addordertohistory="AddOrderToHistory"/>
    </div>
  </div>
</template>

<script>
import vueposLog from './models/vueposLogger';

import EmployeeContent from './components/Shared/EmployeeContent'
import NavigationBar from './components/Shared/NavigationBar.vue';
import AdminContent from './components/Shared/AdminContent.vue';
import Order from './models/Order';
import Product from './models/Product';

export default {
  name: 'App',
  data: () => ({
    orders: [
      // new Order(1, 
      //   new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
      //   new Product('Orange', 'Round juicy orange fruit', 1, 2)
      // ),
      // new Order(2, 
      //   new Product('Beef', 'Round Juicy red meat', 5, 5),
      //   new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 4)
      // )
    ],
    products : [
      // new Product('Cucumber', 'Long juicy green vegetable', 2, 1),
      // new Product('Orange', 'Round juicy orange fruit', 1, 2),
      // new Product('Beef', 'Round juicy red meat', 5, 3),
      // new Product('Chicken Fillet', 'Chicken Fillet shaped pink meat', 7, 5)
    ],
    adminMode: false,
  }),
  components: { NavigationBar, AdminContent, EmployeeContent },
  created() { 
    this.loadData('products'); 
    this.loadData('orders'); 
    },
  methods: {
    /**@param {Product} product */
    onNewProductAdded(product) {
      this.products.push(product);
      vueposLog(`Added ${product.quantity} ${product.name}${(product.name.endsWith('s') ? 'es' : 's')} for the price: ${product.price}`);
      this.saveData('products');
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

      this.saveData('products');
    },
    /**@param {Product} product */
    onRemoveProduct(product) {
      let productIndex = this.products.indexOf(product);
      if (productIndex < 0 || productIndex >= this.products.length) return alert(`Product isn't in products list!`);

      this.products.splice(productIndex, 1);
      vueposLog(`Removed product "${product.name}" from products.`);

      this.saveData('products');
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

      this.saveData('products');
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
      this.orders.push(order);
      this.saveData('orders');
    },

    /**@param {'products' | 'orders'} name */
    saveData(name) {
      let data = (function getDataFromName(_this) {
        switch (name) {
          case 'products': return _this.$data.products;
          case 'orders': return _this.$data.orders;        
          default: 
            try { throw new Error(`${name} was not a recognized input!`); }
            catch (err) {
              alert(err);
              return null;
            }
        }
      })(this);
      if (!data) return;

      localStorage.setItem(name, JSON.stringify(data));
      vueposLog(`Saved ${name} to localStorage as "${name}"`)
    },
    /**@param {'products' | 'orders'} name */
    loadData(name) {
      let isProducts = name == 'products';
      let JSONdata = JSON.parse(localStorage.getItem(name)) || [];

      if (isProducts) {
        this.$data.products = JSONdata.map(p => {
          return new Product(p.name, p.description, p.price, p.quantity);
        });
      }
      else {
        this.$data.orders = JSONdata.map(o => {
          let result = new Order(o.id, ...o.products);
          result.placedAt = new Date(o.placedAt);
          return result;
        });
      }

      let data = isProducts ? this.$data.products : this.$data.orders;
      if (data) 
        vueposLog(`Loaded ${name} from localStorage from name: "${name}"`)
      else {
        this.$data.products = [];
        vueposLog(`No ${name} were found using localStorageName "${name}"`);
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
  /* color: #2c3e50; */
}

#content {
  display: block;
  margin: 2%;
}
</style>
